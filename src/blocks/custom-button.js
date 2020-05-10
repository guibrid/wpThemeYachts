const { registerBlockType 
} = wp.blocks;

const { RichText,
        InspectorControls,
        BlockControls, 
        AlignmentToolbar,
} = wp.blockEditor;

const { PanelBody
 } = wp.components

/*****
CUSTOm BUTTON
*/

registerBlockType('alecaddd/custom-button', {
    title: 'Yatchs bouton',
    description: 'Block bouton noir ou blanc',
    icon: 'format-image',
    category: 'common',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
        },
        style: {
            type: 'string',
            default : 'blackButton'
        },
        link: {
            type: 'string',
            default : '#'
        },
        alignment: {
            type: 'string',
            default: 'none',
        },
        target: {
            type: 'string',
            default: '_self',
        },
    },

    edit: ({ attributes, setAttributes }) => {
        const {
            title,
            style,
            link,
            alignment,
            target
        } = attributes;

        (function(){
            console.log(target)
           })();
        

        // custom functions
        function onChangeStyle(event) {
            setAttributes( { style: event.target.value } )
        }

        function onChangeLink(event) {
            setAttributes( { link: event.target.value } )
        }

        function onChangeAlignment ( newAlignment ) {
            setAttributes( { alignment: newAlignment === undefined ? 'none' : newAlignment } );
        };

        function onChangeTarget(event) {
            if (event.target.checked === true){
                setAttributes( { target: '_blank' } )
            } else {
                setAttributes( { target: '_self' } )
            }
        }


        return ([

            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={ 'Lien du bouton' }>
                    <input value={ link } onChange={ onChangeLink } type="text" />
                </PanelBody>
                <PanelBody title={ 'Style du bouton' } initialOpen={ false }>
                    <select onChange={ onChangeStyle }>
                        <option value="" disabled selected>{ style }</option>
                        <option value="blackButton">Noir</option>
                        <option value="whiteButton">Blanc</option>
                    </select>
                </PanelBody>
                <PanelBody title={ 'Cible du lien' } initialOpen={ false }>
                    <p><input onChange={ onChangeTarget } type="checkbox" /> Cochez pour ouvrir dans une nouvelle fenêtre </p>
                </PanelBody>
            </InspectorControls>,

            <BlockControls>
                <AlignmentToolbar
                    value={ alignment }
                    onChange={ onChangeAlignment }
                />
            </BlockControls>,

            <div style={ { textAlign: alignment, margin: '20px 0' } }>
                {console.log(target)}
                <RichText key="editable"
                          tagName="a"
                          className={"customButton " + style}
                          placeholder="Texte du bouton"
                          href={ link }
                          value={ title }
                          rel="noopener noreferrer"
                          target= { target }
                          onChange={ value => setAttributes({ title: value })} />
            </div>

        ]);
        
    },

    save: ({ attributes }) => {
        const {
            title,
            style,
            link,
            alignment,
            target
        } = attributes;

        return (
            <div style={ { textAlign: alignment, margin: '20px 0' } }>
                <a href={ link } target= { target } rel="noopener noreferrer" className={"customButton " + style} >{ title } <i class="fas fa-chevron-right fa-xs"></i></a>
            </div>
        );

    },
    example: {
        attributes: {
            title: 'Votre bouton',
            link: '#',
            alignment : 'center'
        },
    },
});