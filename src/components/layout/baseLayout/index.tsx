import React, { ReactNode } from 'react'
import { Wrapper } from './style'
import Header from '@/components/organismos/header'
import Footer from '@/components/moleculas/footer'

interface BaseLayoutProps {
    children: ReactNode,
    filter ?: ReactNode,
    upperBody ?: ReactNode
}

export default function BaseLayout({ children, filter , upperBody}: BaseLayoutProps) {
    return (
        <Wrapper.root>
            <Header />
            {upperBody}
            <Wrapper.ArticleContainer>
                <Wrapper.FilterBar>
                    <div className="container">
                        {filter}
                    </div>
                </Wrapper.FilterBar>

                <Wrapper.Article>
                    {children}
                </Wrapper.Article>
            </Wrapper.ArticleContainer>

            <Footer />
        </Wrapper.root>
    )
}
