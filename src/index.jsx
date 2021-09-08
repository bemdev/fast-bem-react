import React from 'reactify';
import { theme } from '@yandex/ui/Theme/presets/default';
import { hydrate } from 'react-dom';
import { cnTheme } from '@yandex/ui/Theme';
import render from 'render';

import App from 'App/App';

const themeClassName = cnTheme({ color: 'yandex-default', root: 'default' });

if (typeof document !== 'undefined') {
    const data = document.getElementById('data');
    const store = JSON.parse(data.innerText.replace(/'/gi, '"'));

    hydrate(
        <App {...store} className={themeClassName} />,
        document.getElementById('root'),
    );

    document.getElementById('data').remove();
} else {
    const store = JSON.parse(process.argv[2].replace(/'/gi, '"'));
    console.info(render(<App {...store} className={themeClassName} />));
}
