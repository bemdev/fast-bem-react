module.exports = {
    render: component => {
        console.log(
            require('./template.js')({
                js: 'build/main.js',
                css: 'build/main.css',
                body: require('react-dom/server').renderToStaticMarkup(
                    component,
                ),
            }),
        );
    },
};