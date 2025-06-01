<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    // 1. Find the “Save Role” button by its CSS class:
    //    it’s rendered by Magento as <button class="scalable save" …>
    var saveBtn = $$('.scalable.save')[0];
    if (!saveBtn) {
        return;
    }

    // 2. Remove Prototype’s built-in click handler (roleForm.submit())
    saveBtn.stopObserving('click');

    // 3. Re-attach our own “click → prompt for ticket_id → submit” logic
    saveBtn.observe('click', function(event) {
        // If ticket-ID feature is disabled, just call Prototype’s original:
        if ($('enabled_ticket_id') && $F('enabled_ticket_id') != '1') {
            roleForm.submit();
            event.stop();
            return false;
        }

        // If we don’t already have a non-empty ticket_id, prompt once:
        var existingTid = ($('ticket_id') ? $F('ticket_id') : '');
        if (!existingTid) {
            var tid = prompt('Please enter ticket id');
            if (!tid) {
                // user clicked “Cancel” or left blank → do nothing
                event.stop();
                return false;
            }
            // inject a hidden <input id="ticket_id" name="ticket_id" …>
            if (!$('ticket_id')) {
                var hiddenField = new Element('input', {
                    type: 'hidden',
                    id:   'ticket_id',
                    name: 'ticket_id',
                    value: tid
                });
                $('role_edit_form').insert({ bottom: hiddenField });
            } else {
                $('ticket_id').value = tid;
            }
        }

        // Finally submit via Prototype’s varienForm (single validation pass):
        roleForm.submit();
        event.stop();
        return false;
    });
});
//]]>
</script>
