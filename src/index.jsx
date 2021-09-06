import React from 'reactify';
import { theme } from '@yandex/ui/Theme/presets/default';
import { hydrate } from 'react-dom';
import { cnTheme } from '@yandex/ui/Theme';
import render from 'render';

import App from 'App/App';

const themeClassName = cnTheme({ color: 'yandex-default', root: 'default' });

if (typeof document !== 'undefined') {
    hydrate(
        <App className={themeClassName} />,
        document.getElementById('root'),
    );
} else {
    console.log(render(<App className={themeClassName} />));
}
