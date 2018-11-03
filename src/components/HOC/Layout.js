import React from 'react'
// import search from '../commons/search'
import Tabs from '../Tabs'
import Header from '../header'

const Layout = ({children}) => (

    <div>
        <div>
            <div className='header_container_out'>
                 <Header/> 
            </div>
            <div>
                <Tabs/>
            </div>
            <div className='select_tab'>
                {children}
            </div>
            <div>
                {/* footer */}
            </div>
        </div>
    </div>
)

export default Layout