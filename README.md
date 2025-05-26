<?php echo $this->getBlockHtml('formkey')?>

+    <!-- ticket-id integration -->
+    <input type="hidden"
+           id="ticket_id"
+           class="validate-ticket"
+           name="ticket_id"
+           value=""/>
+    <input type="hidden"
+           id="enabled_ticket_id"
+           name="enabled_ticket_id"
+           value="<?php echo (Mage::getSingleton('admin/session')->isAllowed('enabled_ticket_id') ? 1 : 0) ?>"/>


<script type="text/javascript">
//<![CDATA[
    // initialize the varienForm with an AJAX-validation URL if needed
    var roleForm = new varienForm(
        'role_edit_form',
        '<?php echo $this->getUrl('*/*/validate') ?>'
    );

    // override the AJAX-validation callback
    roleForm._processValidationResult = function(transport) {
        var response = transport.responseText.evalJSON();
        if (response.error) {
            // existing field-level or global error handling…
            if (response.attribute && $(response.attribute)) {
                $(response.attribute).setHasError(true, roleForm);
                Validation.ajaxError($(response.attribute), response.message);
                $(response.attribute).focus();
            } else if ($('messages')) {
                $('messages').update(
                    '<ul class="messages">'
                  +   '<li class="error-msg"><ul><li>'
                  +     response.message
                  +   '</li></ul></li>'
                  + '</ul>'
                );
            }
        } else {
            // **our ticket-ID prompt logic**
            var ticketId = $F('ticket_id');
            if ((!ticketId || ticketId == '') && $F('enabled_ticket_id') == '1') {
                ticketId = prompt('<?php echo Mage::helper('core')->jsQuoteEscape($this->__('Please enter ticket id')) ?>');
            }
            if (ticketId && ticketId != '') {
                // stash it into the hidden field and submit
                $('ticket_id').value = ticketId;
                roleForm._submit();
            }
        }
    };
//]]>
</script>
