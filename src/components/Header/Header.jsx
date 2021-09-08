import React from 'reactify'

import { Spacer } from '@yandex/ui/Spacer/desktop';
import { Text } from '@yandex/ui/Text/desktop/bundle';
import { Link } from '@yandex/ui/Link/desktop/bundle';

import './Header.css'

export const blockName = React.cn('Header')();

const menuList = [
    { url: '/', title: 'About us' },
    { url: '/', title: 'Docs' },
    { url: '/', title: 'Prices' },
]

const Header = () => {
    const [activeTab, setActiveTab] = React.useState('tab1')

    return (
        <div className={`${blockName}`}>
            <Text color="inverse" typography='headline-l' weight='bold'>apiify</Text>
            <div className='Header_navigation'>
                {
                    menuList.map((item, index) => <Link view='default' key={index}>{item.title}</Link>)
                }
            </div>
        </div>
    );
};

export default Header;