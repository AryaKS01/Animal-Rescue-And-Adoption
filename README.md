function updateTicketNumber(title, e, element) {
  // 1) grab any existing ticket-id
  var ticketId = jQuery("#ticket_id").val();

  // 2) if we need to ask for it…
  if ((!ticketId || ticketId === "") && jQuery('#enabled_ticket_id').val() == 1) {
    ticketId = prompt('Please enter ticket id');
    if (!ticketId) {
      // user cancelled or blank → halt
      if (e && e.preventDefault) e.preventDefault();
      return false;
    }
    // ensure hidden field exists
    if (!jQuery("#ticket_id").length) {
      jQuery('form').first()
        .append('<input type="hidden" id="ticket_id" name="ticket_id" />');
    }
    jQuery("#ticket_id").val(ticketId);
  }

  // 3) if that button originally had its own onclick, run it now
  if (element && jQuery(element).attr('onclick')) {
    eval(jQuery(element).attr('onclick'));
    return true;
  }

  // 4) otherwise, submit the form
  jQuery('form').first().submit();
  return true;
}

jQuery(".scalable.save[title='Save Role']")
  .off("click.oneSave")
  .on("click.oneSave", function(e) {
    if (document.getElementById("enabled_ticket_id").value != 1) {
      return true;
    }
    var ok = updateTicketNumber(this.title, e, this);
    if (ok === false) {
      e.preventDefault();
      return false;
    }
    // first valid ticket → submit immediately
    if (window.roleForm && roleForm.submit) {
      roleForm.submit();
    } else {
      jQuery("#role_edit_form").submit();
    }
    return false;
  });
