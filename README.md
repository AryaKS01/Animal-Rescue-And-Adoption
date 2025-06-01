<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    // 1) Grab exactly the “Save Role” button by its title + class
    var saveBtn = $$('.scalable.save[title="Save Role"]')[0];
    if (!saveBtn) {
        return;
    }

    // 2) Remove Magento’s default Prototype handler (roleForm.submit())
    saveBtn.stopObserving('click');

    // 3) Attach our own click → prompt-for-ticket → native-submit logic
    saveBtn.observe('click', function(event) {
        // If ticket-ID feature is disabled, just do the original Prototype submit:
        if ($('enabled_ticket_id') && $F('enabled_ticket_id') !== '1') {
            // We still call the native element.submit() here,
            // because the original onclick was “roleForm.submit(); return false;”
            // and we want to replicate that exactly.
            $('role_edit_form').submit();
            event.stop();
            return false;
        }

        // If ticket_id is already set (non-empty), skip prompt
        var existingTid = ($('ticket_id') ? $F('ticket_id') : '');
        if (!existingTid) {
            // Prompt once
            var tid = prompt('Please enter ticket id');
            if (!tid) {
                // Cancelled or blank → do nothing
                event.stop();
                return false;
            }
            // Inject hidden <input id="ticket_id" name="ticket_id" value="…" />
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

        // 4) Now call the *native* form.submit() (bypass Prototype.validate)
        $('role_edit_form').submit();
        event.stop();
        return false;
    });
});
//]]>
</script>
