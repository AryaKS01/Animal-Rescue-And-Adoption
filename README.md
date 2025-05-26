<script type="text/javascript">
//<![CDATA[
    // 1) define your ticket-prompt function
    function validateTicketId(){
        if ($F('enabled_ticket_id') == '1' && !$F('ticket_id')) {
            var t = prompt('<?php echo Mage::helper('core')
                ->jsQuoteEscape($this->__('Please enter ticket id')) ?>');
            if (!t) {
                // user cancelled / blank → abort everything
                return false;
            }
            $('ticket_id').value = t;
        }
        return true;
    }

    // 2) init Varien form and monkey-patch its submit()
    document.observe('dom:loaded', function(){
        // create or grab the varienForm instance
        var form = window.roleForm || new varienForm('role_edit_form');
        window.roleForm = form;

        // keep a reference to the original submit:
        form._origSubmit = form.submit;

        // override submit to run your ticket check first:
        form.submit = function(url){
            if (validateTicketId()) {
                // only if user supplied a ticket
                this._origSubmit(url);
            }
        };
    });
//]]>
</script>
