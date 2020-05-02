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
                    <h4>{ title }</h4>
                </div>
                    <div>{ content }</div>
                
            </div>
        )

    }
});

/* Bateaux Infos Block End */



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

    edit: ({ attributes, setAttributes }) => {
        // custom functions
        function updateTitle(event) {
            //console.log(event.target.value);
            setAttributes( { title: event.target.value } )
        }


        return <input value={ attributes.title } onChange={ updateTitle } type="text" />
        
    },

    save: ({ attributes }) => {

        return <p>Title is : <i>{ attributes.title }</i></p>

    }
});




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

    edit: ({ attributes, setAttributes }) => {
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
                <InnerBlocks 
                    allowedBlocks={ ALLOWED_BLOCKS}
                    className="monBoutton" />
            </div>

        ]);
        
    },

    save: ({ attributes }) => {
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
                textAlign: align
            }}>
            <div className="cta-overlay" style={ {background:overlayColor, opacity:overlayOpacity}}></div>
                <h2 style={ { color: titleColor } }>{ title }</h2>
                <RichText.Content tagName="p" 
                                  value={ body }/>
                <InnerBlocks.Content
                    className="monBoutton" />
            </div>
        );

    }
});

/*
* GALERY BLOCK
*/
registerBlockType('alecaddd/custom-galery', {
    title: 'Custom Galery slider',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        images: {
            type: 'array',
        }
    },

    edit: ({ attributes, setAttributes }) => {

        const {
            images,
        } = attributes;

        // custom functions
        function onSelectImage(newImage) {
            console.log(newImage);
            setAttributes( { images: newImage } );
        }


        return ([
            
                <InspectorControls style={ { marginBottom: '40px' } }>
                    <PanelBody title={ 'Background image settings'}>
                        <p><strong>Sélectionnez vos images</strong></p>
                        <MediaUpload
                            onSelect={ onSelectImage }
                            type="image"
                            multiple="true"
                            value={ images }
                            render={ ( { open } ) => (
                                <Button
                                    className="editor-media-placeholder__button is-button is-default is-large"
                                    icon="upload"
                                    onClick={ open }>
                                     Background Image
                                </Button>
                            )}/>
                    </PanelBody>
                </InspectorControls>,
                
                <div>toto
                    {console.log(images)}
                  
                    { images !== undefined ? (
                            images.map(img => {
                                return <img src={img.sizes.full.url} />;
                            })

                        ) : (
                            console.log('tota')
                        ) 
                    }
                </div>
        ])
        
    },

    save: ({ attributes }) => {
        const {
            images,
        } = attributes;

        return(
            
            <div>toto
                {console.log(images)}
                { images !== undefined ? (
                            images.map(img => {
                                return <img src={img.sizes.full.url} />;
                            })
                        ) : (
                            console.log('tota')
                        ) 
                }
            </div>
        )

    }
});