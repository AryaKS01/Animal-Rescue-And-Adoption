<script type="text/javascript">
jQuery(document).ready(function() {
    <?php if (Mage::getSingleton('admin/session')->isAllowed('enabled_ticket_id')): ?>
        if (!jQuery('#ticket_id').length) {
            jQuery('#edit_form').prepend(
                '<input type="hidden" '
              + 'id="ticket_id" '
              + 'name="ticket_id" '
              + 'class="validate-ticket" '
              + 'value="" />'
            );
        }
    <?php endif; ?>
});
</script>
