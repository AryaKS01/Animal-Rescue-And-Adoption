<!-- right after formkey -->
    <?php /* hidden field for the ticket prompt */ ?>
    <input type="hidden"
           name="ticket_id"
           class="validate-ticket"
           value="<?php echo $this->escapeHtml($this->getRequest()->getParam('ticket_id', '')); ?>" />
    <input type="hidden"
           name="enabled_ticket_id"
           id="enabled_ticket_id"
           value="<?php echo Mage::getStoreConfigFlag('api2/rest/enable_ticket_id') ? 1 : 0; ?>" />
	   app/code/local/GBCustom/Api2/controllers/Adminhtml/Api2/RoleController.php
    public function saveAction()
{
    $request   = $this->getRequest();
    $session   = $this->_getSession();
    $id        = $request->getParam('id', false);
    $ticketEnabled = (int) $request->getParam('enabled_ticket_id', 0);
    $ticketId  = trim($request->getParam('ticket_id', ''));

    // ── NEW: enforce ticket-id if enabled ───────────────────────────────────
    if ($ticketEnabled) {
        if ($ticketId === '') {
            $session->addError($this->__('Ticket Id is mandatory.'));
            // redirect back to edit/new
            if ($id) {
                $this->_redirect('*/*/edit', ['id' => $id]);
            } else {
                $this->_redirect('*/*/new');
            }
            return;
        }
        // (Optionally: attach it to the role or log it here)
        // $this->_logTicketIdForRole($ticketId, $id);
    }
    // ── END NEW ────────────────────────────────────────────────────────────

    /** @var $role Mage_Api2_Model_Acl_Global_Role */
    $role = Mage::getModel('api2/acl_global_role')->load($id);

    // … rest of your existing logic …
