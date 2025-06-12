INSERT INTO core_config_data (scope, scope_id, path, value)
VALUES ('default', 0, 'dev/debug/template_hints', 1)
ON DUPLICATE KEY UPDATE value = 1;
 
INSERT INTO core_config_data (scope, scope_id, path, value)
VALUES ('default', 0, 'dev/debug/template_hints_blocks', 1)
ON DUPLICATE KEY UPDATE value = 1;
