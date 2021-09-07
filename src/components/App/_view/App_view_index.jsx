import React from 'reactify';
import { withBemMod } from '@bem-react/core';

import './App_view_index.css';

import { Spacer } from '@yandex/ui/Spacer/desktop';

import { blockName } from '../App';

const AppIndex = () => ({className}) => (
    <div className={`${blockName} ${className}`}>
        <div className="App_content">
            <Spacer bottom={40}>
                <div className="App_logo" />
            </Spacer>
            
        </div>
    </div>
)

export const AppViewIndex = withBemMod(
    'App',
    { view: 'index' },
    AppIndex
);