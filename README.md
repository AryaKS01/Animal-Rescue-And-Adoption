var $saveBtn = jQuery(".scalable.save[title='Save Role']");
if ($saveBtn.length) {
  $saveBtn.off("click.ticketPatch").on("click.ticketPatch", function(e){
    // if ticket-ID feature is disabled, let Magento do its normal thing
    if (document.getElementById("enabled_ticket_id").value != 1) {
      return true;
    }
    e.preventDefault();

    // 1) prompt for ticket (or grab existing)
    var tid = jQuery("#ticket_id").val() || prompt("Please enter ticket id");
    if (!tid) return false;    // user cancelled or left blank

    // 2) set the hidden field
    if (!jQuery("#ticket_id").length) {
      jQuery("form").first().append(
        '<input type="hidden" id="ticket_id" name="ticket_id" />'
      );
    }
    jQuery("#ticket_id").val(tid);

    // 3) bypass Prototype validation and submit natively
    document.getElementById('role_edit_form').submit();
    return false;
  });
}
