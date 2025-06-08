<?php
/**
 * Upgrade script: add `canonical_url` column to the `cms_block` table
 * (module version 1.6.0.0.6 → 1.6.0.0.7)
 */
$installer = $this;
$installer->startSetup();

$tableName  = $installer->getTable('cms/block');  // resolves to cms_block
$connection = $installer->getConnection();

// If the column doesn’t already exist, add it:
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
