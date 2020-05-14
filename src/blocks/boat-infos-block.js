const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, InnerBlocks } = wp.blockEditor;
const { PanelBody } = wp.components

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
        icone: {
            type: 'string',
            default: 'Default'
        }

    },

    edit: ({ attributes, setAttributes }) => {

        const {
            title,
            icone
        } = attributes;

        // custom functions
        function updateTitle(newTitle) {
            setAttributes( { title: newTitle } )
        }
        function updateIcone(event) {
            setAttributes( { icone: event.target.value } )
        }

        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={ 'Selection de l\'icone' }>
                    <select onChange={ updateIcone }>
                        <option value="Default">Default</option>
                        <option value="Presta">Prestation</option>
                        <option value="Capacite">Capacité</option>
                        <option value="Dispo">Mise à disposition</option>
                        <option value="Details">Détails</option>
                        <option value="Infos">Informations</option>
                        <option value="Firework">Firework</option>
                        <option value="Offre">Offre</option>
                        <option value="Alarm">Alarme</option>
                        <option value="Paiement">Paiement</option>
                        <option value="Zoom">Zoom</option>
                        <option value="Check">Check</option>
                    </select>
                </PanelBody>
            </InspectorControls>,

            <div className="boatInfosBloc">
                <div className="title">
                    <RichText key="editable"
                            tagName="h4"
                            className= {"icon" + icone}
                            value={ title }
                            placeholder="Votre titre"
                            onChange={ updateTitle } />
                </div>
                <div>
                    <InnerBlocks />
                </div>            
            </div>
        ]);
        
    },

    save: ({ attributes }) => {

        const {
            title,
            icone
        } = attributes;

        return (
            <div className="boatInfosBloc">
                <div className="title">
                    <RichText.Content tagName="h4" 
                        className= {"icon" + icone}
                        value={ title } />
                </div>
                <div>
                    <InnerBlocks.Content />
                </div>
            </div>
        )

    }
});