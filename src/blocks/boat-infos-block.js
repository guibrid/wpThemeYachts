const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

 const ALLOWED_BLOCKS = ['core/button'];

/* Bateaux Infos Block */
registerBlockType('alecaddd/bateau-infos-bloc', {
    title: 'Bateau Infos Bloc',
    description: 'Bloc dinformation sur un bateau.',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string'
        },
        content: {
            type: 'string'
        }
    },

    edit: ({ attributes, setAttributes }) => {

        const {
            title,
            content,
        } = attributes;

        // custom functions
        function updateTitle(newTitle) {
            setAttributes( { title: newTitle } )
        }
        function updateContent(newContent) {
            setAttributes( { content: newContent } )
        }


        return ([
            <div className="boatInfosBloc" data-aos="zoom-in">
                <div className="title">
                    <RichText key="editable"
                            tagName="h4"
                            value={ title }
                            placeholder="Votre titre"
                            onChange={ updateTitle } />
                </div>
                    <RichText key="editable"
                            tagName="div"
                            value={ content }
                            placeholder="Votre contenu"
                            onChange={ updateContent } />
                
            </div>
        ]);
        
    },

    save: ({ attributes }) => {

        const {
            title,
            content,
        } = attributes;

        return (
            <div className="boatInfosBloc" data-aos="zoom-in">
                <div className="title">
                    <RichText.Content tagName="h4" 
                        value={ title } />
                </div>
                    <RichText.Content tagName="div" 
                        value={ content } />
            </div>
        )

    }
});