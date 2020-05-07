const { registerBlockType } = wp.blocks;

const { InspectorControls,
        MediaUpload,
} = wp.blockEditor;

const { PanelBody,
        Button,
} = wp.components

 
/*
* GALERY BLOCK
*/
registerBlockType('alecaddd/custom-galery', {
    title: 'Galerie slider',
    description: 'Génère un galerie de photo avec slider',
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
                <PanelBody title={ 'Sélectionnez les images de votre galerie'}>
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
                                    Choisir images
                            </Button>
                        )}/>
                </PanelBody>
            </InspectorControls>,
                
            <div id="carouselExampleIndicators" className="carousel slide customSlider" data-ride="carousel" data-aos="zoom-in">
                <div class="carousel-inner">

                { images !== undefined ? (

                    images.map(img => {
                        return ([
                            <div class="carousel-item">
                                <div className="img" style={{backgroundImage: `url(${img.sizes.full.url})`}}></div>
                            </div>
                        ]);
                    })

                ) : (
                    console.log('No pics')
                ) 
                }

                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span> 
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

               
        ])
        
    },

    save: ({ attributes }) => {
        const {
            images,
        } = attributes;

        return(
            <div id="carouselExampleIndicators" className="carousel slide customSlider" data-ride="carousel" data-aos="zoom-in">
                <div class="carousel-inner">

                { images !== undefined ? (

                    images.map(img => {
                        return ([
                            <div class="carousel-item">
                                <div className="img" style={{backgroundImage: `url(${img.sizes.full.url})`}}></div>
                            </div>
                        ]);
                    })

                ) : (

                    console.log('No pic')

                ) 
                }
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span> 
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
           
        )

    }
});