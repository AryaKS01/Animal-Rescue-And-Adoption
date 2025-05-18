<allow_reload translate="label comment">
    <label>Allow Reload</label>
    <frontend_type>select</frontend_type>
    <source_model>adminhtml/system_config_source_yesno</source_model>
    <sort_order>65</sort_order>
    <show_in_default>1</show_in_default>
    <show_in_website>1</show_in_website>
    <show_in_store>1</show_in_store>
    <depends>
        <status>1</status>
    </depends>
</allow_reload>
'allow_reload' => Mage::getStoreConfig('responsive/network_cards/allow_reload', $storeId) ? TRUE : FALSE,
