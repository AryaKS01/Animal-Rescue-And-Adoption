SELECT scope, scope_id, path, value
  FROM core_config_data
 WHERE path LIKE '%show_balance%';
