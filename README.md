<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    // find the “Save Role” button
    var saveBtn = $$('.scalable.save[title="Save Role"]')[0];
    if (!saveBtn) {
        return;
    }

    // remove Magento’s default click handler (roleForm.submit)
    saveBtn.stopObserving('click');

    // add our own click handler
    saveBtn.observe('click', function(event) {
        // if ticket IDs are disabled, submit normally
        if ($('enabled_ticket_id') && $F('enabled_ticket_id') !== '1') {
            $('role_edit_form').submit();
            event.stop();
            return false;
        }

        // if there’s no ticket_id yet, prompt for it
        var existingTid = $('ticket_id') ? $F('ticket_id') : '';
        if (!existingTid) {
            var tid = prompt('Please enter ticket id');
            if (!tid) {
                // user cancelled or left blank → do nothing
                event.stop();
                return false;
            }
            // inject the hidden ticket_id field if missing
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

        // submit the form natively (bypass Prototype validation)
        $('role_edit_form').submit();
        event.stop();
        return false;
    });
});
//]]>
</script>
