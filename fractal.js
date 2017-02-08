// this is in the pattern library that gets imported as a node package

'use strict';

/*
 * Dependencies
 */

const fractal    = module.exports = require('@frctl/fractal').create();
const mandelbrot = require('@frctl/mandelbrot');


fractal.set('project.title', 'Monotype - Pattern Library');

/* Configure components */

fractal.components.set('title', 'Pattern Library');
fractal.components.set('path', `${__dirname}/patterns`);
fractal.components.set('default.preview', `@preview`);
fractal.components.set('ext', '.html');

/* Configure docs */

fractal.docs.set('path', `${__dirname}/docs`);
fractal.docs.set('indexLabel', 'Welcome');
fractal.web.set('builder.dest', __dirname + '/live');

/* Configure web */

const monotypeTheme = mandelbrot({
    "styles": [
        "http://fast.fonts.net/cssapi/f1a10791-4f75-42fd-86a0-69db3131970b.css",
        "default",
        "/_theme/css/theme.css"
    ],
    "format": 'YAML'
});

fractal.web.theme(monotypeTheme);


fractal.web.set('static.path', `${__dirname}/public`);
fractal.web.set('server.sync', true);
fractal.web.set('server.syncOptions', {
    open: true,
    browser: 'default'
});
