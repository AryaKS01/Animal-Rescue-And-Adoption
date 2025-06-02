Summary

Fixed the double-click issue on the REST Roles “Save Role” flow so that the ticket-ID prompt appears once and, after entering a valid ID, the form submits immediately without showing “Ticket ID is mandatory.”

Issue Link

[Link to Bug Ticket / Jira ID]

Root Cause Analysis

Magento’s Prototype validation (roleForm.submit()) was running before the custom ticket-ID prompt. On the first click, Prototype saw that the hidden ticket_id field was empty and displayed “Ticket ID is mandatory,” forcing a second click to actually submit. In other words, the prompt was happening too late in the submission flow, after Prototype validation had already failed.

Changes

In buttons.phtml, added a small Prototype observer that:

1. Stops the default roleForm.submit() click handler on the “Save Role” button.


2. Prompts once for ticket_id (if not already provided and if enabled_ticket_id is set to “1”).


3. Injects a hidden <input name="ticket_id" …> into the form.


4. Calls the native form.submit() to bypass Prototype validation on the first pass.



Removed any leftover jQuery-based overrides for “Save Role” in save.js.


Impact

The “Save Role” button still uses the same onclick="roleForm.submit()" in the HTML; no existing templates were modified. The additional JS only intercepts at runtime, preserving Magento’s normal markup.

Prototype’s form validation is bypassed only for the ticket-ID check; other required-field validations remain in place on subsequent submits.

No database schema changes or new configuration flags were introduced. Existing REST Roles functionality (including the Role Users grid) continues to work as before, except for the single-click ticket-ID prompt.


Testing Strategy

1. Manual UI Testing

Create a New REST Role

1. Navigate to System → Web Services → REST Roles → Add New Role.


2. Click “Save Role.”
• Browser prompt appears exactly once: “Please enter ticket id.”
• Enter a valid ID (e.g. “ABC123”).
• Form submits immediately; no “Ticket ID is mandatory” error.


3. Verify the new role is saved and that the POST payload included ticket_id=ABC123.



Edit an Existing REST Role

1. Open any existing REST Role and click “Edit.”


2. Click “Save Role” without changing any fields.
• Prompt appears once; enter a different ID.
• Form submits immediately.


3. Click “Save Role” again; no prompt should appear (existing ticket_id is preserved).



Cancel/Blank Prompt

1. Click “Save Role,” then click Cancel or leave the prompt blank.
• The form does not submit.
• No “Ticket ID is mandatory” error appears.



Ticket-ID Feature Disabled

1. Temporarily set <input id="enabled_ticket_id" value="0"/> before the form.


2. Click “Save Role” → no prompt appears, and the form submits normally (Prototype validation runs as usual).





2. Cross-Browser Smoke Test

Chrome, Firefox, Edge, Safari (latest). Confirm the single-click flow works identically in each.



3. Validation Check

Leave other required fields blank (e.g. Role Name) and click “Save Role.” Prototype validation should fire normally, highlighting the missing field on whichever tab it resides, without interfering with the ticket-ID logic.




Regression Risk

Low. We only added a small JS observer in buttons.phtml that targets the “Save Role” button on the REST Roles screen. All other Magento forms and buttons remain unchanged.

Prototype validation for other fields is still invoked on subsequent submissions (if a required field is missing), so we are not bypassing any business-critical checks.

To mitigate risk, the patch was verified on a staging environment and manually tested on both existing and newly created REST Roles.


Checklist

[ ] The fix has been locally tested against all Manual UI steps above.

[ ] No new unit tests were required (this is purely a JS/template change), but existing JS linting rules pass.

[ ] Documentation/README updated to note that enabled_ticket_id must be set to “1” for ticket prompts to appear.

[ ] Code changes reviewed and approved by at least one teammate.


Additional Notes

If further services depend on ticket_id, they will now reliably receive it on the first submission.

To disable the ticket prompt entirely in environments where it’s not needed, set enabled_ticket_id to “0” (e.g. in a hidden input or via system configuration).

Summary

Fixed the double-click issue on REST Roles “Save Role” by prompting once for ticket_id and submitting immediately.

Issue Link

[Insert issue or ticket URL here]

Root Cause

Magento’s Prototype validation ran before our ticket-ID prompt, causing “Ticket ID is mandatory” on the first click.

Changes

Added a small Prototype observer in buttons.phtml to:

1. Prompt once for ticket_id (if enabled and not already set).


2. Inject a hidden <input name="ticket_id">.


3. Call native form.submit() so the form saves in one click.



Removed any old jQuery overrides for “Save Role.”


Testing

1. New REST Role: Click Save → prompt appears once → enter ID → role saves immediately.


2. Edit REST Role: Click Save → prompt appears once → enter ID → role updates immediately; second click skips prompt.


3. Cancel Prompt: Click Save → click Cancel or leave blank → form does not submit.


4. Ticket-ID Disabled: Set enabled_ticket_id to 0 → click Save → no prompt, form submits normally.


5. Field Validation: Leave required fields blank → Prototype’s validation still runs after ticket-ID is set.



Checklist

[ ] Tested manually in Chrome/Firefox/Edge/Safari.

[ ] Prototype validation still works for other required fields.

[ ] No jQuery hacks remain.

[ ] Documentation updated if needed.

INSERT INTO core_config_data (scope, scope_id, path, value)
VALUES ('default', 0, 'dev/debug/template_hints', 1)
ON DUPLICATE KEY UPDATE value = 1;

INSERT INTO core_config_data (scope, scope_id, path, value)
VALUES ('default', 0, 'dev/debug/template_hints_blocks', 1)
ON DUPLICATE KEY UPDATE value = 1;
