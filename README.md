// Add “Canonical URL” text field
    $fieldset->addField('canonical_url', 'text', array(
        'name'     => 'canonical_url',
        'label'    => Mage::helper('cms')->__('Canonical URL'),
        'title'    => Mage::helper('cms')->__('Canonical URL'),
        'required' => false,
        'note'     => 'Optional: specify a custom canonical URL for this block.',
    ));
