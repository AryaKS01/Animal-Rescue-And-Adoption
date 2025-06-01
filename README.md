<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    // 1) Grab exactly the “Save Role” button by title + class
    var saveBtn = $$('.scalable.save[title="Save Role"]')[0];
    if (!saveBtn) {
        return;
    }

    // 2) Remove Magento’s default Prototype handler (roleForm.submit())
    saveBtn.stopObserving('click');

    // 3) Add our own click → prompt → submit logic
    saveBtn.observe('click', function(event) {
        // If ticket-ID is disabled, just submit normally:
        if ($('enabled_ticket_id') && $F('enabled_ticket_id') != '1') {
            roleForm.submit();
            event.stop();
            return false;
        }

        // If we don’t already have a non-empty ticket_id, prompt once:
        var existingTid = $('ticket_id') ? $F('ticket_id') : '';
        if (!existingTid) {
            var tid = prompt('Please enter ticket id');
            if (!tid) {
                // Cancel or blank → do nothing, prevent submission
                event.stop();
                return false;
            }
            // Inject a hidden <input name="ticket_id" …> into the form
            if (!$('ticket_id')) {
                var hiddenField = new Element('input', {
                    type:  'hidden',
                    id:    'ticket_id',
                    name:  'ticket_id',
                    value: tid
                });
                $('role_edit_form').insert({ bottom: hiddenField });
            } else {
                $('ticket_id').value = tid;
            }
        }

        // Finally, call Prototype’s form.submit() (one validation pass only)
        roleForm.submit();
        event.stop();
        return false;
    });
});
//]]>
</script>
