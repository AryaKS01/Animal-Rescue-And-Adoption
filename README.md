UPDATE core_config_data
SET value = 0
WHERE scope = 'default' AND scope_id = 0 AND path IN (
    'dev/debug/template_hints',
    'dev/debug/template_hints_blocks'
);
