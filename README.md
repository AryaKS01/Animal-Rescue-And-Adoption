/**
 * Add canonical_url to cms_page
 *
 * CMPS QUERY:
 * ALTER TABLE cms_page
 *   ADD `canonical_url` VARCHAR(255) NULL COMMENT 'Canonical URL',
 *   ALGORITHM=INPLACE, LOCK=NONE;
 *
 * Roll back:
 * ALTER TABLE cms_page DROP COLUMN `canonical_url`, ALGORITHM=INPLACE, LOCK=NONE;
 */
$connection->addColumn(
    $tableName,
    'canonical_url',
    [
        'type'     => Varien_Db_Ddl_Table::TYPE_TEXT,
        'length'   => 255,
        'nullable' => true,
        'default'  => null,
        'comment'  => 'Canonical URL'
    ]

);

SELECT code, version, data_version
  FROM core_resource
 WHERE code = 'cms_setup';
