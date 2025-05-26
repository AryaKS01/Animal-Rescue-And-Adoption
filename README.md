jQuery(".save, .submit, .add, .delete").on('click', function(e) {
+   // ─────────── Fix Save Role ───────────
+   // if this is the REST-Roles “Save Role” button, just prompt & let the inline onclick fire
+   if (this.title === 'Save Role') {
+       // only if ticket logic is enabled
+       if (jQuery('#enabled_ticket_id').val() == '1' && !jQuery('#ticket_id').val()) {
+           var t = prompt('Please enter ticket id');
+           if (!t) {
+               e.preventDefault();
+               return false;
+           }
+           jQuery('#ticket_id').val(t);
+       }
+       // let Magento's own onclick (roleForm.submit()) run now
+       return true;
+   }
+   // ────────────────────────────────────────
    // … the rest of your existing click handler …
 });
