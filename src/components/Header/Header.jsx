import React from 'reactify'

import { Text } from '@yandex/ui/Text/desktop/bundle';
import { Link } from '@yandex/ui/Link/desktop/bundle';

import './Header.css'

export const blockName = React.cn('Header')();

const menuList = [
    { url: '/', title: 'About us' },
    { url: '/docs', title: 'Documentation' },
    { url: '/', title: 'Storybook' },
    { url: '/', title: 'Porfolio' },
    { url: '/', title: 'Tools' },
    { url: '/', title: 'Contacts' },
]

const Header = () => {
    return (
        <div className={`${blockName}`}>
            <Text color="inverse" typography='headline-l' weight='bold'>apiify</Text>
            <div className='Header_navigation'>
                {
                    menuList.map((item, index) => <Link view='default' href={item.url} key={index}>{item.title}</Link>)
                }
            </div>
        </div>
    );
};

export default Header;