jQuery(document).ready(function() {
    jQuery(".save, .submit, .add, .delete").on('click', function(e) {
        if (document.getElementById("enabled_ticket_id").value != 1) {
            return true;
        }
        var cacheCheck = true;
        if (window.location.href.indexOf("/cache/") > -1) {
            jQuery(this).attr('onclick', function() {
                var uri = jQuery(this).attr('onclick');
                if (uri.indexOf("(") > 0) {
                    var clean_uri = uri.substring(uri.indexOf("https"), uri.length-2);
                    ticketId = updateTicketNumber(this.title, e);
                    if (ticketId != false) {
                        link = clean_uri + 'ticket_id/' + ticketId + '/';
                        jQuery(this).prop('onclick', setLocation(link));
                    }
                    cacheCheck = false;
                }
            });
        }
        var valueis = jQuery(this).attr('onclick');
        const restrictedTitles = ['Print', 'Print ( Digital )', 'Submit Comment', 'Add New Row', 'Delete Row', 'Submit Shipment', 'Submit Invoice'];
        /**
         * 1. Module - Manage attribute set
         * Restricting edit action on Save Attribute Set
         * 2. Sales Invoice Print
         * 3. Sales shipment Print ( Digital )
         * 4. Add New Row in GBCustom -> Customoptions
         * 5. Delete Row in GBCustom -> Customoptions
         */
        if ((valueis == 'editSet.save();' && this.title == 'Save Attribute Set') || restrictedTitles.includes(this.title)) {
            return false;
        }
        /**
         * (Save & Generate for Google Sitemap) Ignoring other add actions
         */
        if (jQuery("#" + this.id).attr('class') == 'scalable add') {
            if (this.title == 'Save & Generate') {
                updateTicketNumber(this.title, e);
                return true;
            } else {
                return false;
            }
        } else if (this.className == 'scalable add') {
            /**
             * For Add New Role in Permissions -> Roles
             */
            return false;
        }

        /**
         * Restricting the ticket id for Get AWD No button
         */
        if (jQuery('#getAwsNumberpdf').attr('id') == 'getAwsNumberpdf') {
            return false;
        }

        if (this.title != 'Continue' && cacheCheck == true) {
            if ((this.title == 'Save And Continue Edit' || this.title == 'Save and Continue Edit') && valueis != 'saveAndContinueEdit()') {
                return false;
            }
            updateTicketNumber(this.title, e, this);
        }
    });
    /**
     * For grid actions
     */
    jQuery(".scalable").on('click', function(e) {
        if (document.getElementById("enabled_ticket_id").value != 1) {
            return true;
        }
        /**
         * Grid actions
         */
        if (this.title == 'Submit') {
            const gridActions = ['run', 'schedule', 'disable', 'enable', 'delete', 'reindex', 'change_mode', 'status', 'attributes',
                'newsletter_subscribe', 'newsletter_unsubscribe', 'assign_group', 'export', 'refresh_recent', 'refresh_lifetime', 'revoke', 'refresh'];
            const salesGridActions = ['rmamassprint', 'autoinvoice', 'cancel_order', 'hold_order',
                'unhold_order', 'pdfinvoices_order', 'pdfshipments_order', 'pdfcreditmemos_order', 'pdfdocs_order', 'print_shipping_label', 'complete'];
            var selectedOption = jQuery('.select').find(":selected").val();
            if (gridActions.include(selectedOption) || salesGridActions.include(selectedOption)) {
                updateTicketNumber(selectedOption, e);
                jQuery(this).attr('onclick', function() {
                    link = this.onclick;
                    jQuery(this).prop('onclick', link)
                });
            }
        }

        /**
         * Export actions
         */
        if (this.title == 'Export') {
            jQuery(this).attr('onclick', function () {
                var onclick_value = jQuery(this).attr('onclick');
                if (onclick_value.indexOf("(") > 0) {
                    var uri = exportActionUrl();
                    ticketId = updateTicketNumber(this.title, e);
                    if (ticketId != false) {
                        link = uri + 'ticket_id/' + ticketId + '/';
                        jQuery(this).prop('onclick', setLocation(link));
                        jQuery("#ticket_id").val('');
                    }
                }
            });
        }

        /**
         * Actions for buttons in order details page
         */
        const orderDetailsPageButtons = ['Hold', 'Unhold', 'Send Order Email', 'Cancel/Reverse', 'Initiate Cancel', 'Business Approve', 'Credit Memo', 'Initialize Card API', 'Send Password Email', 'Refresh Content Provider', 'Process Now'];
        if (orderDetailsPageButtons.include(this.title)) {
            var uri = jQuery(this).attr('onclick');
            if (uri.indexOf("(") > 0) {
                var clean_uri = uri.substring(uri.indexOf("https"), uri.length-2);
                ticketId = updateTicketNumber(this.title, e);
                if (ticketId != false) {
                    link = clean_uri + 'ticket_id/' + ticketId + '/';
                    jQuery(this).prop('onclick', setLocation(link));
                }
            }
        }
    });

    jQuery(document).on("click", "a", function(e){
        if (document.getElementById("enabled_ticket_id").value != 1) {
            return true;
        }
        if (this.text == 'Delete' || this.text == 'Reindex Data') {
            ticketId = updateTicketNumber(this.text, e);
            jQuery(this).attr('href', function() {
                link = this.href + 'ticket_id/' + ticketId + '/';
                jQuery(this).prop('href', link)
            });
        }
    });
});
function updateTicketNumber(title, e, element = null) {
    var ticketId = jQuery("#ticket_id").val();
    if ((ticketId == null || ticketId == '') &&
        jQuery('#enabled_ticket_id').val() == 1
    ) {
        var ticketId = prompt('Please enter ticket id');
        if(typeof jQuery("#ticket_id").val() == 'undefined' && !jQuery("#ticket_id").length) {
            jQuery('form').append('<input type="hidden" id="ticket_id" class="validate-ticket" name="ticket_id" value=""/>');
        }

        if (ticketId == null || ticketId == '') {
            if (e instanceof jQuery) {
                e.preventDefault();
            } else if (e.cancelable) {
                e.preventDefault();
            }
            return false;
        } else {
            var ticketIdclass = jQuery('.validate-ticket').length;
            jQuery(".validate-ticket").val(ticketId);

            var validationFailedFields = jQuery('.validation-failed').length;
            var ticketIdelement = document.getElementById("ticket_id");
            var ticketValidation = ticketIdelement.classList.contains("validate-ticket");
            if (ticketValidation && title == 'Save Customer') {
                var sampleTicketFailedCount = jQuery('.validate-ticket.validation-failed').length;
                if (validationFailedFields == sampleTicketFailedCount) {
                    validationFailedFields = 1;
                } else {
                    validationFailedFields = 0;
                }
            } else if (ticketValidation && validationFailedFields > 0) {
                validationFailedFields -= ticketIdclass;
            }
        }
        if (title == 'Save And Continue Edit' || title == 'Save and Continue Edit') {
            saveAndContinueEdit();
        } else {
            /**
             * Allowed grid actions
             */
            const gridActions = ['run', 'schedule', 'disable', 'enable', 'delete', 'status', 'attributes', 'reindex', 'change_mode', 'rmamassprint', 'autoinvoice', 'cancel_order', 'hold_order',
                'unhold_order', 'pdfinvoices_order', 'pdfshipments_order', 'pdfcreditmemos_order', 'pdfdocs_order', 'print_shipping_label', 'newsletter_subscribe', 'newsletter_unsubscribe',
                'assign_group', 'export', 'refresh_recent', 'refresh_lifetime', 'revoke', 'refresh', 'complete', 'resend', 'edit_recipient', 'track_email', 'submit_comment', "update_status"];
            /**
             * 1. For the Delete and reindex actions via link
             * 2. For controller actions - clear cache, order details page actions
             */
            const controllerActions = ['Delete', 'Reindex Data', 'Flush Magento Cache', 'Flush Cache Storage',
                'Hold', 'Unhold', 'Send Order Email', 'Cancel/Reverse', 'Initiate Cancel', 'Business Approve', 'Credit Memo', 'Send Password Email', 'Refresh Content Provider', 'Process Now', 'Export', 'Retry Status'];
            if (controllerActions.include(title)) {
                return ticketId;
            }
            /**
             * For grid actions
             */
            if (gridActions.include(title)) {
                return true;
            }
            if (title == 'Refund Offline') {
                disableElements('submit-button');submitCreditMemoOffline();
            }

            if ((title != 'Save Customer' && (validationFailedFields == 0)) || (title == 'Save Customer' && validationFailedFields == 1) || (element != null && jQuery(element).attr('onclick') != '')) {
                if (title == 'Save User') {
                    TreePanels.rebuildTrees();
                    $form = jQuery('form');
                    var data = Ext.util.JSON.encode(editSet.req);
                    jQuery("#user_store_ids").val(data);
                } else if (title == 'Save Attribute Set') {
                    if (addSet.submit()) disableElements('save');
                    return;
                } else if (title == 'Save Currency Rates') {
                    currencyForm.submit();
                    return;
                }

                if((element != null && jQuery(element).attr('onclick') != '')) {
                    //If onclick attribute is set then execute it using eval method else submit form
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
VM5021:1 Uncaught SyntaxError: Illegal return statement
    at updateTicketNumber (save.js:217:42)
    at HTMLButtonElement.<anonymous> (save.js:62:13)
    at HTMLButtonElement.dispatch (jquery.js:2:43065)
    at HTMLButtonElement.<anonymous> (jquery.js:2:41049)

﻿
