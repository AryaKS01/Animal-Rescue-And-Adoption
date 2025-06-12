public function cancelAction()
{
    $orderId = $this->getRequest()->getParam('order_id');

    // 1) Exactly the same mandatory-ticket logic as reverseAction()
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

    // 2) Pull in the ticket (you already append it via JS)
    $ticketId = $this->getRequest()->getParam('ticket_id');

    try {
        /** @var Mage_Sales_Model_Order $order */
        $order = $this->_initOrder();

        // 3) Mirror your corporate “reverse” flow, but call initiateCancel()
        if ($order->getIsViaWcard() || $order->getIsViaWpay()) {
            // this is exactly parallel to reverseAction’s initiateReverse()
            Mage::getModel('corpadmin/sales_order')->initiateCancel($order);
        } else {
            // if you have a carddetails helper for non-corporate, call it here:
            Mage::helper('carddetails')->cancelWoohooRulesOrder($order);
        }

        // 4) Then let Magento do its normal cancel()
        $order->cancel();
        $order->save();

        $this->_getSession()->addSuccess(
            Mage::helper('sales')->__('The order has been cancelled.')
        );
    } catch (Mage_Core_Exception $e) {
        $this->_getSession()->addError($e->getMessage());
    } catch (Exception $e) {
        Mage::logException($e);
        $this->_getSession()->addError(
            Mage::helper('sales')->__('The order has not been cancelled.')
        );
    }

    $this->_redirect('*/*/view', ['order_id' => $orderId]);
}
