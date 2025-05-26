<script type="text/javascript">
//<![CDATA[
function validateTicketId(){
    // Only prompt if the feature is enabled
    if ($F('enabled_ticket_id') == '1') {
        // If no ticket yet, ask for one
        if (!$F('ticket_id')) {
            var ticket = prompt('<?php echo Mage::helper('core')
                ->jsQuoteEscape($this->__('Please enter ticket id')) ?>');
            if (!ticket) {
                // user cancelled or left blank → do NOT submit
                return false;
            }
            // stash it and let the form submit
            $('ticket_id').value = ticket;
        }
    }
    // all good → allow form submission
    return true;
}
//]]>
</script>
