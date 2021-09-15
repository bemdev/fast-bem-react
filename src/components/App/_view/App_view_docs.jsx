import React from 'reactify';
import { withBemMod } from '@bem-react/core';
import marked from 'marked'

import './App_view_docs.css';
import Header from 'Header/Header'

import { Button } from '@yandex/ui/Button/desktop/bundle';
import { Spin } from '@yandex/ui/Spin/desktop/bundle'

import { blockName } from '../App';

const categoryList = [
    { url: 'https://raw.githubusercontent.com/bemdev/hw-shri-2020-1/master/README.md', name: 'Intro' },
    { url: 'https://raw.githubusercontent.com/bemdev/yandex-ui-themer/master/README.md', name: 'How Start' },
    { url: 'https://raw.githubusercontent.com/awtkns/fastapi-crudrouter/master/README.md', name: 'Learn more' },
    { url: 'https://raw.githubusercontent.com/bemdev/bem-react-core/master/docs/en/README.md', name: 'Outro' },
]

const AppDocs = () => ({ className }) => {
    const [url, setUrl] = React.useState(categoryList[0].url)
    const [content, setContent] = React.useState('');
    const [subCategory, setSubCategory] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const fetchMarkdown = (url) => {
        if (!url.match(/\#/)) {
            setLoading(true)
            React.fetch(url)
                .then(({ data }) => setContent(() => {
                    const markdownString = marked(data);
                    setSubCategory(makeSubCategories(markdownString))
                    setLoading(false)
                    return markdownString
                }))
        }
        return ''
    }

    React.useEffect(() => setContent(fetchMarkdown(url)), [url])

    const handleClick = React.useCallback((url) => {
        window.location.hash = ''
        setUrl(url)
    }, [])

    const makeSubCategories = React.useCallback((content) => {
        let matches = content.match(/id=.*/gi);
        return matches.map(m => {
            return {
                url: `#${m.replace('id="', '').replace(/\"\>.*/, '')}`,
                name: `${m.replace(/id=".*">/, '').replace(/\<\/.*/, '').replace(/\&quot\;/gi, '').slice(0, 33)}`
            }
        })
    }, [])

    return (
        <div className={`${blockName} ${className}`}>
            <Header />
            <div className={React.cn('App', 'content')({ type: 'page' })}>
                <div className={React.cn('App', 'sidebar')()}>
                    <div className={React.cn('Category')()}>
                        {
                            categoryList.map(
                                (cat, index) => 
                                    <Button 
                                        view='clear'
                                        key={index} 
                                        url={cat.url}
                                        size='l'
                                        onClick={() => {
                                            handleClick(cat.url)
                                        }}
                                    >
                                        {cat.name}
                                    </Button>
                            )
                        }
                    </div>
                </div>
                <div className={React.cn('App', 'component')()}>
                    {
                        loading
                            ? <Spin progress size='l' view="default" size="m" />
                            : <div dangerouslySetInnerHTML={{ __html: content }} />
                    }
                </div>
                <div className={React.cn('App', 'sidebar')({ position: 'right' })}>
                    <div className={React.cn('SubCategory')()}>
                        {
                            subCategory.length > 0 && subCategory.map(
                                (cat, index) => 
                                    <Button 
                                        key={index} 
                                        url={cat.url}
                                        view='clear'
                                        type='link'
                                        size='l'
                                    >
                                        {cat.name}
                                    </Button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export const AppViewDocs = withBemMod('App', { view: 'docs' }, AppDocs);