import React from 'react'

import Header from '../components/header'
import Footer from '../components/footer'
import { BackgroundGradient } from './background-gradient'

export default function Layout({ children }) {
    return(
        <div className="relative mx-auto my-0 flex min-h-screen flex-col overflow-hidden bg-white">
            <BackgroundGradient className="absolute top-0 bottom-0 left-1/2 hidden w-1/2 lg:block" />
    
            <Header />
            <main className="">
            {children}
            </main>
            <Footer />
        </div>
        // <div>
        //     <div>  
        //         <div className="main-page-img"> </div> 
        //         <div> 
        //             <p className='section-header'>Don’t hide yourself</p>
        //             <h1>Share<br></br>
        //             your LOOK</h1>
        //             <Link className="tw-button" to="/">
        //                 <button>Start now!</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    )
}