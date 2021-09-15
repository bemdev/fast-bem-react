import React from 'reactify';
import { compose } from '@bem-react/core';

import { Spacer } from '@yandex/ui/Spacer/desktop';
import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Text } from '@yandex/ui/Text/desktop/bundle';

import { AppViewDocs } from './_view/App_view_docs';
import Header from 'Header/Header'

import './App.css'

export const blockName = React.cn('App')();

const App = ({ className }) => {
    return (
        <div className={`${blockName} ${className}`}>
            <Header />
            <div className={React.cn('App', 'content')()}>
                <Spacer top={40} bottom={20} style={{display: 'flex', alignItems: 'center'}}>
                    <div className="App_logo-1" />
                    <div className="App_logo-2" />
                    <div className="App_logo-3" />
                </Spacer>
                <Text color="inverse" as="div">
                    <Text color="inverse" as="h1">
                        FAST<Text color="inverse" as='small'>__api</Text> BEM REACT<Text color="inverse" as='small'>_ify</Text>
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
                        Join to sponsorships
                    </Button>
                    <Button
                        size="l"
                        view="default"
                        theme="raised"
                        className="App-link">
                        Read motivation
                    </Button>
                </div>
            </div>
        </div>
    );
};

const withCompose = compose(AppViewDocs)(App);

export default withCompose;