public function toOptionArray()
{
    // Always start with at least the “please select” option
    $merchantList = [[
        'value' => '',
        'label' => Mage::helper('woohoopay')->__('Please select...')
    ]];

    try {
        $merchants = Mage::helper('woohoorouter/router')->fetchMerchantList();
    } catch (Exception $e) {
        // Log what went wrong, but don’t break the save
        Mage::logException($e);
        return $merchantList;
    }

    // If we didn’t get an array, just return the placeholder
    if (!is_array($merchants) || !isset($merchants['merchants']) || !is_array($merchants['merchants'])) {
        Mage::log('WoohooPay Router: unexpected response from fetchMerchantList()', null, 'woohoopay.log');
        return $merchantList;
    }

    // Build out the real list
    foreach ($merchants['merchants'] as $merchant) {
        $merchantList[] = [
            'value' => $merchant['code'] ?? '',
            'label' => $merchant['name'] ?? '',
        ];
    }

    // If there are more than DEFAULT_LIMIT, merge in pages
    if (!empty($merchants['total'])
        && $merchants['total'] >= GBCustom_Microservice_Helper_Data::DEFAULT_LIMIT
    ) {
        $merchantList = Mage::helper('microservice/data')
                           ->fetchAndMergeMerchants($merchantList);
    }

    return $merchantList;
}
