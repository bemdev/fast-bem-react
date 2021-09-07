import React from 'reactify';

import './App.css';

import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Text } from '@yandex/ui/Text/desktop/bundle';
import { Spacer } from '@yandex/ui/Spacer/desktop';

const blockName = React.cn('App')();

function App({ className }) {
    return (
        <div className={`${blockName} ${className}`}>
            <div className="App_content">
                <Spacer bottom={40}>
                    <div className="App_logo" />
                </Spacer>
                <Text color="inverse" as="p">
                    Edit <code>src/components/App.jsx</code> and save to reload.
                </Text>
                <Button size="m" view="action" className="App-link">
                    Learn React with BEM
                </Button>
            </div>
        </div>
    );
}

export default App;