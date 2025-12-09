import React from 'react'
import { Footer } from '../dom/footer'
import { Navbar } from '../dom/navbar';

interface Props {
    children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='px-5 sm:px-20 2xl:px-0'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout