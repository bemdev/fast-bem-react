import React from 'reactify';
import { render } from 'render';
import { hydrate } from 'react-dom';
import { cnTheme } from '@yandex/ui/Theme';
import { theme } from '@yandex/ui/Theme/presets/default';

import App from 'App/App';

const themeClassName = cnTheme({ color: 'yandex-default', root: 'default' });

if (typeof document === 'undefined') {
    render(<App className={themeClassName} />);
} else {
    hydrate(
        <App className={themeClassName} />,
        document.getElementById('root'),
    );
}
