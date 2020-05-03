const { registerBlockType } = wp.blocks;
const { RichText,
        BlockControls, 
        AlignmentToolbar
} = wp.blockEditor;

 const ALLOWED_BLOCKS = ['core/button'];


registerBlockType('alecaddd/custom-cta', {
    title: 'Call to aLign',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'p',
            default: 'Block content can be aligned with toolbar.',
        },
        alignment: {
            type: 'string',
            default:'center'
        },
    },

    // custom functions

    edit: ({attributes, setAttributes, focus}) => {

        const {
            content,
            alignment,
        } = attributes;

        function onChangeContent( updatedContent ) {
            setAttributes( { content: updatedContent } );
        }

        function onChangeAlignment( updatedAlignment ) {
            setAttributes( { alignment: updatedAlignment } );
        }

        return ([
            <div>
            <BlockControls>
            <AlignmentToolbar
                value={ alignment }
                onChange={onChangeAlignment}
            />
			</BlockControls>
            <RichText key="editable"
                      tagName="p"
                      value={ content }
                      style= { {textAlign: alignment} }
                      onChange={ onChangeContent }
                      onFocus= {focus} />
            </div>				
        ]);
        
    },

    save: ({ attributes, setAttributes }) => {
        const {
            content,
            alignment,
        } = attributes;

        return (
            <div>
            <p style= { {textAlign: alignment} }>{ content }</p>
            </div>
        );
    }
});