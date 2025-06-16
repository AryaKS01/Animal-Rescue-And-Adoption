// under the existing meta_index field
$fieldset->addField('canonical_url', 'text', array(
    'name'     => 'canonical_url',
    'label'    => Mage::helper('cms')->__('Canonical URL'),
    'title'    => Mage::helper('cms')->__('Canonical URL'),
    'disabled' => $isElementDisabled,
    'value'    => $model->getCanonicalUrl(),
    'note'     => Mage::helper('cms')->__('Full URL that you’d like search engines to index.'),
));
