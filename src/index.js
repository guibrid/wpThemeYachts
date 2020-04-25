const { registerBlockType } = wp.blocks;
const { RichText } = wp.blockEditor;

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

registerBlockType('alecaddd/custom-cta3', {
    title: 'Call to Action 3',
    description: 'Block to generate a custom Call to Action',
    icon: 'format-image',
    category: 'layout',

    // custom attributes
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: 'h2'
        },
        body: {
            type: 'string',
            source: 'html',
            selector: 'p'
        }
    },

    edit({ attributes, setAttributes }) {
        const {
            title,
            body
        } = attributes;

        // custom functions
        function onChangeTitle(newTitle) {
            //console.log(event.target.value);
            setAttributes( { title: newTitle } )
        }

        function onChangeBody(newBody) {
            //console.log(event.target.value);
            setAttributes( { body: newBody } )
        }


        return ([
            <div class="cta-container">
                <RichText key="editable"
                          tagName="h2"
                          placeholder="Your Title"
                          value={ title }
                          onChange={ onChangeTitle } />
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
            title,
            body
        } = attributes;

        return (
            <div class="cta-container">
                <h2>{ title }</h2>
                <RichText.Content tagName="p" 
                                  value={ body } />
            </div>
        );

    }
});