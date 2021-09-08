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
                <Spacer top={40} bottom={20}>
                    <div className="App_logo" />
                </Spacer>
                <Text color="inverse" as="p">
                    <Text color="inverse" as="h1">
                        FAST BEM REACT
                    </Text>
                    make awesome web pages today.
                </Text>
                <Spacer vertical={10} />
                <div className={React.cn('App', 'controls')()}>
                    <Button
                        size="l"
                        theme="raised"
                        view="action"
                        className="App-link">
                        Join to memberships
                    </Button>
                    <Button
                        size="l"
                        view="default"
                        theme="raised"
                        className="App-link">
                        Read documentation
                    </Button>
                </div>
            </div>
        </div>
    );
};

const withCompose = compose(AppViewIndex)(App);

export default withCompose;