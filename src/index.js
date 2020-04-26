const { registerBlockType } = wp.blocks;
const { RichText,
        InspectorControls,
        ColorPalette,
        MediaUpload
} = wp.blockEditor;
const { PanelBody,
        Button,
        RangeControl
 } = wp.components

registerBlockType('alecaddd/custom-cta', {
    title: 'Call to Action',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {},

    // custom functions

    edit() {

        return <div>Hello World</div>
        
    },

    save() {}
});

registerBlockType('alecaddd/custom-cta2', {
    title: 'Call to Action 2',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string'
        }
    },

    edit({ attributes, setAttributes }) {
        // custom functions
        function updateTitle(event) {
            //console.log(event.target.value);
            setAttributes( { title: event.target.value } )
        }


        return <input value={ attributes.title } onChange={ updateTitle } type="text" />
        
    },

    save({ attributes }) {

        return <p>Title is : <i>{ attributes.title }</i></p>

    }
});

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

    edit({ attributes, setAttributes }) {
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
            <div class="titre-h1-style2">
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

    save({ attributes }) {
        const {
            title,
            subtitle,
            titleColor
        } = attributes;

        return (
            <div class="titre-h1-style2">
                <h2 style={ { color: titleColor } }>{ title }</h2>
                <RichText.Content tagName="p" 
                                  value={ subtitle } />
            </div>
        );

    }
});

registerBlockType('alecaddd/custom-cta4', {
    title: 'Call to Action 4',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',
    supports: { // Hey WP, I want to use your alignment toolbar!
        align: true,
    },

    // custom attributes
    attributes: {
        align: {
            type: 'string',
            default: 'center'
        },
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        titleColor: {
            type: 'string',
            default: 'black'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        },
        backgroundImage: {
            type: 'string',
            default: null
        },
        overlayColor: {
            type: 'string',
            default: 'black'
        },
        overlayOpacity:{
            type: 'number',
            default: 0.3
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            align,
            title,
            body,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;

        // custom functions

        function onChangeTitle(newTitle) {
            setAttributes( { title: newTitle } );
        }

        function onChangeBody(newBody) {
            setAttributes( { body: newBody } );
        }

        function onTitleColorChange(newColor) {
            setAttributes( { titleColor: newColor } );
        }

        function onSelectImage(newImage) {
            console.log(newImage);
            setAttributes( { backgroundImage: newImage.sizes.full.url } );
        }

        function onOverlayColor(newColor) {
            console.log(newColor);
            setAttributes( { overlayColor: newColor } );
        }

        function onOverlayOpacity(newOpacity) {
            console.log(newOpacity);
            setAttributes( { overlayOpacity: newOpacity } );
        }


        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={ 'Title color' }>
                    <p><strong>Select title color:</strong></p>
                    <ColorPalette value={ titleColor }
                                  onChange={ onTitleColorChange } />
                </PanelBody>
                <PanelBody title={ 'Background image settings'}>
                    <p><strong>Select a Background Image</strong></p>
                    <MediaUpload
                        onSelect={ onSelectImage }
                        type="image" 
                        value={ backgroundImage }
                        render={ ( { open } ) => (
							<Button
								className="editor-media-placeholder__button is-button is-default is-large"
								icon="upload"
								onClick={ open }>
								 Background Image
							</Button>
						)}/>
                    <div style={{marginTop: '20px', marginBottom: '40px'}}>
                        <p>Overlay color:</p>
                        <ColorPalette value={ overlayColor }
                                  onChange={ onOverlayColor } />
                    </div>
                    <RangeControl 
                        label={ 'Overlay opacity'}
                        value={ overlayOpacity }
                        onChange={ onOverlayOpacity }
                        min={ 0 }
                        max={ 1 }
                        step= { 0.05 } /> 
                </PanelBody>
            </InspectorControls>,
            <div className="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                textAlign: align
            }}>
            <div className="cta-overlay" style={ {background:overlayColor, opacity:overlayOpacity}}></div>
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Your Title"
                          value={ title }
                          onChange={ onChangeTitle }
                          style={ { color: titleColor } } />
                <RichText key="editable"
                          tagName="p"
                          placeholder="Your body"
                          value={ body }
                          onChange={ onChangeBody } />
            </div>

        ]);
        
    },

    save({ attributes }) {
        const {
            align,
            title,
            body,
            titleColor,
            backgroundImage,
            overlayColor,
            overlayOpacity
        } = attributes;

        return (
            <div className="cta-container" style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className="cta-overlay" style={ {background:overlayColor, opacity:overlayOpacity}}></div>
                <h2 style={ { color: titleColor } }>{ title }</h2>
                <RichText.Content tagName="p" 
                                  value={ body }/>
            </div>
        );

    }
});