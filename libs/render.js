import template from './template';
import { renderToStaticMarkup as renderStatic } from 'react-dom/server';

const render = component =>
    template({
        js: 'build/main.js',
        css: 'build/main.css',
        body: renderStatic(component),
    });

export default render;