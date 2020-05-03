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