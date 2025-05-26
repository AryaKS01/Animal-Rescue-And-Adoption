function updateTicketNumber(title, e, element = null) {
    var ticketId = jQuery("#ticket_id").val();
    
    // Add this block for role form submission
    if (title === 'Save Role') {
        if (ticketId === null || ticketId === '') {
            ticketId = prompt('Please enter ticket id');
            if (ticketId === null || ticketId === '') {
                e.preventDefault();
                return false;
            }
            jQuery("#ticket_id").val(ticketId); // Ensure ticket_id is set
        }
        
        // Submit using Magento's VarienForm, not jQuery
        roleForm.submit();
        return true;
    }

    // Rest of your existing code...
}
