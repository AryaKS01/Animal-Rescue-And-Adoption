public function cancelAction()
{
    $orderId = $this->getRequest()->getParam('order_id');
    // 1) ticket-id mandatory check
    if (
        !$this->getRequest()->getParam('ticket_id')
        && Mage::getSingleton('admin/session')->isAllowed('enabled_ticket_id')
    ) {
        $this->_getSession()->addError(
            Mage::helper('adminhtml')->__('Ticket Id is mandatory.')
        );
        $this->_redirect('*/*/view', ['order_id' => $orderId]);
        return;
    }

    // 2) call your microservice-logging helper
    $ticketId = $this->getRequest()->getParam('ticket_id');
    if ($ticketId) {
        try {
            Mage::helper('carddetails') // or your microservice helper alias
                ->logTicketToService($orderId, $ticketId);
        } catch (Exception $e) {
            Mage::logException($e);
            $this->_getSession()->addError(
                Mage::helper('sales')->__('Could not send ticket to logging service.')
            );
            // (you could choose to bail here or continue)
        }
    }

    // 3) your existing “pre-cancel” checks:
    $isCreditMemoMonitorCompleted   = Mage::helper('carddetails')
                                          ->isCreditMemoMonitorCompleted($orderId);
    $isPaymentVerificationCompleted = Mage::helper('payment')
                                          ->isPaymentVerificationCompleted($orderId);
    if (!$isCreditMemoMonitorCompleted || !$isPaymentVerificationCompleted) {
        $errormsg = !$isCreditMemoMonitorCompleted
            ? 'Manual action is not allowed as auto cancellation process is already going on.'
            : 'Manual action is not allowed as Payment Verification process is going on.';
        $this->_getSession()->addError($this->__( $errormsg ));
        $this->_redirect('*/*/view', ['order_id' => $orderId]);
        return;
    }

    // 4) your core cancellation flow
    if ($order = $this->_initOrder()) {
        try {
            Mage::log('Cancellation process started for order number :' . $orderId);
            $order->addStatusHistoryComment('Cancellation process started.', 
                                            GBCustom_Sales_Model_Order::STATUS_CANCELED);

            // ... your woohoo / wpay / carddetails cancel calls here ...

            $order->cancel();
            $order->setState(
                GBCustom_Sales_Model_Order::STATE_CANCELED,
                $order->getStatus(),
                'Order is cancelled.'
            );
            $order->setCancellationFlow(
                GBCustom_Carddetails_Helper_Data::CANCELLATION_FLOW_BUSINESS
            );
            $order->save();

            $this->_getSession()->addSuccess(
                Mage::helper('sales')->__('The order has been cancelled.')
            );
        } catch (Mage_Core_Exception $e) {
            $this->_getSession()->addError($e->getMessage());
        } catch (Exception $e) {
            $this->_getSession()->addError(
                $this->__('The order has not been cancelled.')
            );
            Mage::logException($e);
        }
    }
    $this->_redirect('*/*/view', ['order_id' => $orderId]);
}
