<?php  
/**  
 * Upgrade script: add `canonical_url` column to the `cms_block` table  
 * (from module version 1.6.0.0.6 → 1.6.0.0.7)  
 */  
$installer = $this;  
$installer->startSetup();  
  
$tableName = $installer->getTable('cms_block');  
  
$installer->run("  
    ALTER TABLE `{$tableName}`  
    ADD COLUMN `canonical_url` VARCHAR(255) NULL COMMENT 'Canonical URL';  
");  
  
$installer->endSetup();  
