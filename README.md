<?php
/**
 * Upgrade script: add `canonical_url` column to the `cms_block` table
 * (module version 1.6.0.0.6 → 1.6.0.0.7)
 *
 * CMPS QUERY
 *   ALTER TABLE cms_block
 *     ADD `canonical_url` VARCHAR(255) NULL COMMENT 'Canonical URL for CMS Block'
 *     ALGORITHM=INPLACE, LOCK=NONE;
 *
 * Roll back:
 *   ALTER TABLE cms_block
 *     DROP COLUMN `canonical_url`
 *     ALGORITHM=INPLACE, LOCK=NONE;
 */

$installer = $this;
$installer->startSetup();

$tableName  = $installer->getTable('cms/block');  // resolves to `cms_block`
$connection = $installer->getConnection();

// Only add if it doesn’t already exist
if (! $connection->tableColumnExists($tableName, 'canonical_url')) {
    $connection->addColumn(
        $tableName,
        'canonical_url',
        [
            'type'     => Varien_Db_Ddl_Table::TYPE_VARCHAR,
            'length'   => 255,
            'nullable' => true,
            'comment'  => 'Canonical URL for CMS Block'
        ]
    );
}

$installer->endSetup();
