const { registerBlockType } = wp.blocks;

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