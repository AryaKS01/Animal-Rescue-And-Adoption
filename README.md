jQuery(document).ready(function(){
  var $save = jQuery(".scalable.save[title='Save Role']");
  // if we’re on the Roles page…
  if ($save.length) {
    // remove any existing Save-Role handlers so ours runs first
    $save.off("click.ticketPatch");
    // add our one-click patch
    $save.on("click.ticketPatch", function(e){
      // if ticket-ID isn’t enabled, fall back to normal
      if (document.getElementById("enabled_ticket_id").value != 1) {
        return true;
      }
      e.preventDefault();
      // grab existing or prompt
      var tid = jQuery("#ticket_id").val() || prompt("Please enter ticket id");
      if (!tid) {
        // cancelled or blank → do nothing
        return false;
      }
      // ensure hidden field exists & set it
      if (!jQuery("#ticket_id").length) {
        jQuery("form").first()
          .append('<input type="hidden" id="ticket_id" name="ticket_id" />');
      }
      jQuery("#ticket_id").val(tid);
      // now immediately submit
      if (window.roleForm && typeof roleForm.submit === "function") {
        roleForm.submit();
      } else {
        jQuery("#role_edit_form").submit();
      }
      return false;
    });
  }
});
