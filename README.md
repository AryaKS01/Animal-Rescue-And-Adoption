<?xml version="1.0"?>
<config>
    <modules>
        <CustomCss_CustomConfig>
            <version>0.1.0</version>
        </CustomCss_CustomConfig>
    </modules>
    <global>
        <models>
            <customcss_customconfig>
                <class>CustomCss_CustomConfig_Model</class>
            </customcss_customconfig>
        </models>
        <!--to delete : event-->
        <!--<events>
            <admin_system_config_changed_section_responsive>
                <observers>
                    <customcss_customconfig>
                        <type>singleton</type>
                        <class>customcss_customconfig/observer</class>
                        <method>adminSystemConfigChangedSection</method>
                    </customcss_customconfig>
                </observers>
            </admin_system_config_changed_section_responsive>
        </events>-->
    </global>
	<default>
        <responsive>
            <store_level_generic_configurations>
                <product_max_qty_allow>10</product_max_qty_allow>
                <max_item_in_cart>5</max_item_in_cart>
                <max_total_order_value>200000</max_total_order_value>
                <enable_rewards_point_calculator>0</enable_rewards_point_calculator>
                <merchant_outlet_identifier>merchantOutletName</merchant_outlet_identifier>
                <rewards_point_calculator_label>Rewards point calculator</rewards_point_calculator_label>
                <favourite_product_max_month>1</favourite_product_max_month>
                <enable_order_retry>0</enable_order_retry>
            </store_level_generic_configurations>
        </responsive>
    </default>
</config>
this is config.xml and below is some data of system.xml
<network_cards translate="label comment">
                    <label>Open Loop Network Card Configuration</label>
                    <sort_order>60</sort_order>
                    <show_in_default>1</show_in_default>
                    <show_in_website>1</show_in_website>
                    <show_in_store>1</show_in_store>
                    <fields>
                        <status translate="label comment">
                            <label>Status</label>
                            <frontend_type>select</frontend_type>
                            <source_model>adminhtml/system_config_source_yesno</source_model>
                            <sort_order>60</sort_order>
                            <show_in_default>1</show_in_default>
                            <show_in_website>1</show_in_website>
                            <show_in_store>1</show_in_store>
                        </status>
                        <digital_sku>
                            <label>Digital SKU</label>
                            <frontend_type>text</frontend_type>
                            <sort_order>70</sort_order>
                            <show_in_default>1</show_in_default>
                            <show_in_website>1</show_in_website>
                            <show_in_store>1</show_in_store>
                            <validate>validate-alphanum</validate>
                            <depends>
                                <status>1</status>
                            </depends>
                        </digital_sku>
                        <physical_sku>
                            <label>Physical SKU</label>
                            <frontend_type>text</frontend_type>
                            <sort_order>80</sort_order>
                            <show_in_default>1</show_in_default>
                            <show_in_website>1</show_in_website>
                            <show_in_store>1</show_in_store>
                            <validate>validate-alphanum</validate>
                            <depends>
                                <status>1</status>
                            </depends>
                        </physical_sku>
                        <payment_method>
                            <label>Payment Method</label>
                            <frontend_type>select</frontend_type>
                            <source_model>payment/system_config_source_paymentmethods</source_model>
                            <sort_order>90</sort_order>
                            <show_in_default>1</show_in_default>
                            <show_in_website>0</show_in_website>
                            <show_in_store>1</show_in_store>
                            <validate>required-entry</validate>
                            <depends>
                                <status>1</status>
                            </depends>
                        </payment_method>
                        <redeem_amount>
                            <label>Redeem Amount</label>
                            <frontend_type>text</frontend_type>
                            <sort_order>100</sort_order>
                            <show_in_default>1</show_in_default>
                            <show_in_website>0</show_in_website>
                            <show_in_store>1</show_in_store>
                            <validate>required-entry validate-number validate-zero-or-greater</validate>
                            <depends>
                                <status>1</status>
                            </depends>
                        </redeem_amount>
                    </fields>
                </network_cards>
