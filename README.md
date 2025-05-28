function updateTicketNumber(title, e, element = null) {
    var ticketId = jQuery("#ticket_id").val();
    if ((ticketId == null || ticketId === '') && jQuery('#enabled_ticket_id').val() == 1) {
        var ticketId = prompt('Please enter ticket id');
        if (typeof jQuery("#ticket_id").val() === 'undefined' && !jQuery("#ticket_id").length) {
            jQuery('form').append('<input type="hidden" id="ticket_id" class="validate-ticket" name="ticket_id" value=""/>');
        }

        if (ticketId == null || ticketId === '') {
            if (e instanceof jQuery) {
                e.preventDefault();
            } else if (e.cancelable) {
                e.preventDefault();
            }
            return false;
        } else {
            var ticketIdClass = jQuery('.validate-ticket').length;
            jQuery(".validate-ticket").val(ticketId);

            var validationFailedFields = jQuery('.validation-failed').length;
            var ticketIdElement = document.getElementById("ticket_id");
            var ticketValidation = ticketIdElement.classList.contains("validate-ticket");
            if (ticketValidation && title === 'Save Customer') {
                var sampleTicketFailedCount = jQuery('.validate-ticket.validation-failed').length;
                validationFailedFields = (validationFailedFields === sampleTicketFailedCount) ? 1 : 0;
            } else if (ticketValidation && validationFailedFields > 0) {
                validationFailedFields -= ticketIdClass;
            }
        }

        if (title === 'Save And Continue Edit' || title === 'Save and Continue Edit') {
            saveAndContinueEdit();
        } else {
            const gridActions = ['run', 'schedule', 'disable', 'enable', 'delete', 'status', 'attributes', 'reindex', 'change_mode', 'rmamassprint', 'autoinvoice', 'cancel_order', 'hold_order', 'unhold_order', 'pdfinvoices_order', 'pdfshipments_order', 'pdfcreditmemos_order', 'pdfdocs_order', 'print_shipping_label', 'newsletter_subscribe', 'newsletter_unsubscribe', 'assign_group', 'export', 'refresh_recent', 'refresh_lifetime', 'revoke', 'refresh', 'complete', 'resend', 'edit_recipient', 'track_email', 'submit_comment', "update_status"];
            const controllerActions = ['Delete', 'Reindex Data', 'Flush Magento Cache', 'Flush Cache Storage', 'Hold', 'Unhold', 'Send Order Email', 'Cancel/Reverse', 'Initiate Cancel', 'Business Approve', 'Credit Memo', 'Send Password Email', 'Refresh Content Provider', 'Process Now', 'Export', 'Retry Status'];

            // Corrected .includes() and fixed syntax
            if (controllerActions.includes(title)) {
                return ticketId;
            }
            if (gridActions.includes(title)) {
                return true;
            }

            if (title === 'Refund Offline') {
                disableElements('submit-button');
                submitCreditMemoOffline();
            }

            if ((title !== 'Save Customer' && validationFailedFields === 0) || (title === 'Save Customer' && validationFailedFields === 1) || (element !== null && jQuery(element).attr('onclick') !== '')) {
                if (title === 'Save User') {
                    TreePanels.rebuildTrees();
                    var $form = jQuery('form');
                    var data = Ext.util.JSON.encode(editSet.req);
                    jQuery("#user_store_ids").val(data);
                } else if (title === 'Save Attribute Set') {
                    if (addSet.submit()) {
                        disableElements('save');
                    }
                    return;
                } else if (title === 'Save Currency Rates') {
                    currencyForm.submit();
                    return;
                }

                if (element !== null && jQuery(element).attr('onclick') !== '') {
                    eval(jQuery(element).attr('onclick'));
                    return;
                } else {
                    jQuery('form').submit();
                }
            }
        }
        return true;
    } else {
        return true;
    }
}
