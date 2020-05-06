const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.blockEditor;
const { PanelBody } = wp.components

/* Accordion Block */
registerBlockType('alecaddd/accordion-block', {
    title: 'Accordion block',
    description: 'Bloc à intégrer dans l\'accordion.',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        id : {
          type: 'string',
          type: 'accordion1'
        },
        title: {
            type: 'string'
        },
        content: {
          type: 'string'
      },
    },

    edit: ({ attributes, setAttributes }) => {

        const {
          id,
          title,
          content,  
        } = attributes;

        // custom functions
        function updateid(event) {
          //console.log(newId)
          setAttributes( { id: event.target.value } )
        }

        function updateTitle(newTitle) {
            setAttributes( { title: newTitle } )
        }
        
        function updateContent(newContent) {
            setAttributes( { content: newContent } )
        }


        return ([
            <InspectorControls style={ { marginBottom: '40px' } }>
                <PanelBody title={ 'ID du block accordion' }>
                    <p>Chaque block doit avoir un id différent. Par exemple: block1, Block2, Block3,...</p>
                    <input value={ id } onChange={ updateid } type="text" required />
                </PanelBody>
            </InspectorControls>,

            <div className="card" data-aos="zoom-in">
              <div className="card-header" id={"heading"+ id }>
                <h5 className="mb-0">
                  <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+ id } aria-expanded="true" aria-controls={"collapse"+ id }>
                    <RichText key="editable"
                              tagName="span"
                              value={ title }
                              placeholder="Votre titre"
                              onChange={ updateTitle } />
                  </button>
                </h5>
              </div>

              <div id={"collapse"+ id } className="collapse show" aria-labelledby={"heading"+ id } data-parent="#accordion">
                <div className="card-body">
                  <RichText key="editable"
                            tagName="div"
                            value={ content }
                            placeholder="Votre contenu"
                            onChange={ updateContent } />
                </div>
              </div>
            </div>
        ]);
        
    },

    save: ({ attributes }) => {

        const {
          id,
          title,
          content, 
        } = attributes;

        return (
          <div className="card" data-aos="zoom-in">
            <div className="card-header" id={"heading"+ id }>
              <h5 className="mb-0">
                <button className="btn btn-link" data-toggle="collapse" data-target={"#collapse"+ id } aria-expanded="true" aria-controls={"collapse"+ id }>
                <RichText.Content tagName="span" 
                          value={ title } />
                </button>
              </h5>
            </div>
        
            <div id={"collapse"+ id } className="collapse show" aria-labelledby={"heading"+ id } data-parent="#accordion">
              <div className="card-body">
                <RichText.Content tagName="div" 
                            value={ content } />
              </div>
            </div>
          </div>
        )

    }
});