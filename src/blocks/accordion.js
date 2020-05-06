const { registerBlockType } = wp.blocks;

const { 
    InnerBlocks,
} = wp.blockEditor;

const ALLOWED_BLOCKS = ['alecaddd/accordion-block'];

/* Accordion */
registerBlockType('alecaddd/accordion', {
    title: 'Accordion',
    description: 'Ajoute une liste d\'accordion',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
            default: 'accordion'
        },
    },

    edit: ({ attributes }) => {

        const {
            title,
        } = attributes;

        return ([
            <div id={title}>
                <InnerBlocks
                allowedBlocks={ ALLOWED_BLOCKS} />
            </div>
        ]);
        
    },

    save: ({ attributes }) => {

        const {
            title,
        } = attributes;

        return (
            <div id={title}>
                <InnerBlocks.Content />
            </div>
        )

    }
});