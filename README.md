<script type="text/javascript">
//<![CDATA[
document.observe('dom:loaded', function() {
    var form = $('role_edit_form');
    if (!form) return;

    // Attach a “submit” observer instead of overriding submit():
    form.stopObserving('submit');

    form.observe('submit', function(event) {
        var enabled = $('enabled_ticket_id') ? $F('enabled_ticket_id') : '0';
        if (enabled === '1') {
            var existingTid = $('ticket_id') ? $F('ticket_id') : '';
            if (!existingTid) {
                var tid = prompt('Please enter ticket id');
                if (!tid) {
                    // Cancelled → prevent the form from submitting
                    event.stop();
                    return false;
                }
                // Inject hidden field if missing
                if (!$('ticket_id')) {
                    var fld = new Element('input', {
                        type:  'hidden',
                        id:    'ticket_id',
                        name:  'ticket_id',
                        value: tid
                    });
                    form.insert({ bottom: fld });
                } else {
                    $('ticket_id').value = tid;
                }
            }
        }
        // If ticket_id is set or ticketing is disabled, let the form continue:
        // (Prototype’s varienForm.validate() will run because Mage’s onclick calls roleForm.submit())
    });
});
//]]>
</script>
