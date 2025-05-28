jQuery(document).ready(function() {
    /**
     * ────────────────────────────────────────────────────────────────
     * One-click “Save Role” override
     * Prompts for ticket_id once, injects the hidden field, then
     * bypasses Prototype validation by doing a native form.submit().
     * ────────────────────────────────────────────────────────────────
     */
    var $saveRoleBtn = jQuery(".scalable.save[title='Save Role']");
    if ($saveRoleBtn.length) {
        $saveRoleBtn
            .off("click.ticketPatch")
            .on("click.ticketPatch", function(e) {
                // if ticket-ID feature is disabled, let Magento handle it
                if (document.getElementById("enabled_ticket_id").value != 1) {
                    return true;
                }
                e.preventDefault();

                // prompt for ticket or reuse existing
                var tid = jQuery("#ticket_id").val() || prompt("Please enter ticket id");
                if (!tid) {
                    // cancelled or empty → do nothing
                    return false;
                }

                // ensure hidden field exists & set value
                if (!jQuery("#ticket_id").length) {
                    jQuery("form").first()
                        .append('<input type="hidden" id="ticket_id" name="ticket_id" />');
                }
                jQuery("#ticket_id").val(tid);

                // native submit to skip Prototype’s onSubmit validation
                document.getElementById("role_edit_form").submit();
                return false;
            });
    }
