import React from 'react';
import { create } from 'axios';
import { withNaming } from '@bem-react/classname';

if (typeof window === 'undefined') {
    React.useLayoutEffect = React.useEffect;
} //hack to server render

React.fetch = create(); //isomorph fetch
React.cn = withNaming({ n: '', e: '__', m: '_', v: '_' }); //bem-classname with old naming

export default React;
