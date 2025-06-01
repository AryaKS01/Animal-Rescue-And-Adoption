<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    // 1) Locate the “Save Role” button inside this screen’s .form-buttons container.
    //    (We drop the [title="Save Role"] filter so it catches any variation.)
    var saveBtn = $$('.form-buttons .scalable.save')[0];
    if (!saveBtn) {
        return;
    }

    // 2) Unbind Prototype’s default click handler (roleForm.submit())
    saveBtn.stopObserving('click');

    // 3) Re‐attach our own “click → prompt‐once → native submit” logic
    saveBtn.observe('click', function(event) {
        // Always preventPrototype’s own validation from firing:
        event.preventDefault();
        event.stopPropagation();

        // 4) If ticket‐IDs are disabled (enabled_ticket_id ≠ '1'), just submit normally.
        var enabled = $('enabled_ticket_id') ? $F('enabled_ticket_id') : '0';
        if (enabled !== '1') {
            // Native form.submit() bypasses varienForm.validate()
            $('role_edit_form').submit();
            return false;
        }

        // 5) If ticket_id is already in the form (with a non‐empty value), skip the prompt.
        var existingTid = ($('ticket_id') ? $F('ticket_id') : '');
        if (!existingTid) {
            // Prompt exactly once for ticket_id
            var tid = prompt('Please enter ticket id');
            if (!tid) {
                // Cancelled or blank → do nothing
                return false;
            }
            // Inject a hidden <input id="ticket_id" name="ticket_id" value="…" />
            if (!$('ticket_id')) {
                var fld = new Element('input', {
                    type:  'hidden',
                    id:    'ticket_id',
                    name:  'ticket_id',
                    value: tid
                });
                $('role_edit_form').insert({ bottom: fld });
            } else {
                $('ticket_id').value = tid;
            }
        }

        // 6) Now that ticket_id is present, do a native submit (bypassing varienForm.validate())
        $('role_edit_form').submit();
        return false;
    });
});
//]]>
</script>
