import React from 'reactify';
import { compose } from '@bem-react/core';

import { Spacer } from '@yandex/ui/Spacer/desktop';
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Text } from '@yandex/ui/Text/desktop/bundle';

import { AppViewIndex } from './_view/App_view_index';

export const blockName = React.cn('App')();

const App = ({ className }) => {
    return (
        <div className={`${blockName} ${className}`}>
            <div className="App_content">
                <Spacer bottom={40}>
                    <div className="App_logo" />
                </Spacer>
                <Text color="inverse" as="p">
                    Explore <code>Fast Bem React</code> app and make awesome web pages.
                </Text>
                <Button size="m" view="action" className="App-link">
                    Go read more
                </Button>
            </div>
        </div>
    );
}

const withCompose = compose(
    AppViewIndex
)(App);

export default withCompose;