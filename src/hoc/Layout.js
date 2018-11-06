import React,{Fragment} from 'react'
// import search from '../commons/search'
import Tabs from '../components/Tabs'
import Header from '../components/Header_Footer/header'

const Layout = ({children}) => (

    <div>
        
        <Fragment >
                <Header/> 
        </Fragment>
        <Fragment>
            <Tabs/>
        </Fragment>
        <div className='select_Tab'>
            {children}
        </div>
        <Fragment>
            {/* footer */}
        </Fragment>
        
    </div>
)

export default Layout