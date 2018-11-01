import React from 'react'
// import search from '../commons/search'
import Tabs from '../Tabs'

const Layout = ({children}) => (

    <div>
        <div>
            <div>
                {/* <Search/> */}
            </div>
            <div>
                <Tabs/>
            </div>
            <div>
                {children}
            </div>
            <div>
                {/* footer */}
            </div>
        </div>
    </div>
)

export default Layout