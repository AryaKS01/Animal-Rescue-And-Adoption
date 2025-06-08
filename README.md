SELECT scope, scope_id, path, value
  FROM core_config_data
 WHERE path LIKE 'payment/%/show_%';
