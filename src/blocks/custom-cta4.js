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
