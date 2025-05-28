jQuery(document).ready(function(){
  // 1️⃣ Remove any existing click handlers on the Save-Role button
  jQuery(".scalable.save[title='Save Role']").off("click.singleSave");

  // 2️⃣ Add our one-and-only click handler
  jQuery(".scalable.save[title='Save Role']").on("click.singleSave", function(e){
    // if ticket-ID feature is disabled → normal submit
    if (document.getElementById("enabled_ticket_id").value != 1) {
      return true;
    }

    // prompt & validate (this will return `false` if you cancel/blank)
    var ok = updateTicketNumber(this.title, e, this);
    if (ok === false) {
      e.preventDefault();
      return false;
    }

    // we have a ticket → submit immediately
    if (window.roleForm && typeof window.roleForm.submit === "function") {
      window.roleForm.submit();
    } else {
      // fallback if form object isn’t global
      jQuery("#role_edit_form").submit();
    }
    return false;
  });
});
console.log("✅ ticket‐save override script loaded, looking for button…");
console.log("Selector match count:", jQuery(".scalable.save[title='Save Role']").length);
