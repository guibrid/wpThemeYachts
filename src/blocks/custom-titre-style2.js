const { registerBlockType } = wp.blocks;
const { RichText,
        InspectorControls,
        ColorPalette,
        MediaUpload,
        InnerBlocks,
        BlockControls, 
        AlignmentToolbar
} = wp.blockEditor;
const { PanelBody,
        Button,
        RangeControl
 } = wp.components
 const ALLOWED_BLOCKS = ['core/button'];

/*****
TITRE STYLE 2
*/

registerBlockType('alecaddd/custom-titre-style2', {
    title: 'Titre - Style 2',
    description: 'Block pour créer titre de la page',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h1'
        },
        titleColor: {
            type: 'string',
            default: '#C69C6C'
        },
        subtitle: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },

    edit: ({ attributes, setAttributes }) => {
        const {
            title,
            subtitle,
            titleColor
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } )
        }

        function onChangeSubtitle(newSubtitle) {
            setAttributes( { subtitle: newSubtitle } )
        }

        function onTitleColorChange(newColor) {
            setAttributes( { titleColor: newColor } )
        }


        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={ 'Title color' }>
                    <p><strong>Select title color:</strong></p>
                    <ColorPalette value={ titleColor }
                                  onChange={ onTitleColorChange } />
                </PanelBody>
            </InspectorControls>,
            <div className="titre-h1-style2">
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Votre titre"
                          value={ title }
                          onChange={ onChangeTitle }
                          style={ { color: titleColor } } />
                <RichText key="editable"
                          tagName="p"
                          placeholder="Votre sous-titre"
                          value={ subtitle }
                          onChange={ onChangeSubtitle } />
            </div>

        ]);
        
    },

    save: ({ attributes }) => {
        const {
            title,
            subtitle,
            titleColor
        } = attributes;

        return (
            <div className="titre-h1-style2">
                <h2 style={ { color: titleColor } }>{ title }</h2>
                <RichText.Content tagName="p" 
                                  value={ subtitle } />
            </div>
        );

    }
});

/*****
TITRE STYLE 2 END
*/