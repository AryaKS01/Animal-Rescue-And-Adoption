<?php
/**
 * Upgrade script: add `canonical_url` column to the `cms_block` table
 * (module version 1.6.0.0.6 → 1.6.0.0.7)
 */

$installer = $this;
$installer->startSetup();

$tableName = $installer->getTable('cms/block');

// Raw SQL is more reliable across Magento 1.x versions
$installer->run("
    ALTER TABLE `{$tableName}`
    ADD COLUMN `canonical_url` VARCHAR(255) NULL COMMENT 'Canonical URL for CMS Block';
");

$installer->endSetup();
