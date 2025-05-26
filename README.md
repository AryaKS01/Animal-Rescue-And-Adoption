jQuery(".save, .submit, .add, .delete").on('click', function (e) {
    // Identify if the button is Save Role
    if (this.title === 'Save Role') {
        if (jQuery('#enabled_ticket_id').val() == '1' && !jQuery('#ticket_id').val()) {
            var t = prompt('Please enter ticket id');
            if (!t) {
                e.preventDefault();
                return false;
            }
            jQuery('#ticket_id').val(t);

            // PREVENT the native onclick submit
            e.preventDefault();

            // Delay to ensure the ticket id is updated in DOM
            setTimeout(function () {
                roleForm.submit();
            }, 100);

            return false;
        }
    }

    // default handling for other actions
});
