app/code/local/GBCustom/Cms/sql/cms_setup/mysql4-upgrade-1.6.0.0.6-1.6.0.0.7.php
<?php
/**
 * Upgrade script: add `canonical_url` column to the `cms_block` table
 * (from module version 1.6.0.0.6 → 1.6.0.0.7)
 */
$installer = $this;
$installer->startSetup();

$tableName  = $installer->getTable('cms/block');
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
protected function getStaticBlock(string $id)
{
    $response = [];
    $cacheKey = $this->getCommonHelper()->generateCacheKey(
        $this->getVersion(),
        self::CACHE_KEY,
        [$this->_store->getStoreId(), $id]
    );

    if ($responseData = $this->loadCache($cacheKey)) {
        return json_decode($responseData, true);
    } else {
        /** @var Mage_Cms_Model_Block $cmsBlockModel */
        $cmsBlockModel = Mage::getModel('cms/block');
        $block = $cmsBlockModel
            ->setStoreId($this->_store->getStoreId())
            ->load($id);

        if ($block->getId() && $block->getIsActive()) {
            $response['identifier'] = $id;
            $response['title']      = $block->getTitle();
            $response['content']    = $block->getContent();

            // ← Here is the one minimal new line:
            $response['canonical'] = ['url' => $block->getCanonicalUrl()];

            $this->_saveCache(
                json_encode($this->getFilter()->out($response)),
                $cacheKey,
                [$this->getTag()],
                null
            );
        }
    }

    return $response;
}
