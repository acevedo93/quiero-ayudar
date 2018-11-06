import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './HOC/Layout'
import Cuando from './components/screens/Cuando'
import Donde from './components/screens/Donde'
import EnQue from './components/screens/EnQue'



const Routes = () => {

    const setRoutes = [
        {
            path: '/cuando',
            component: Cuando
        },
        {
            path: '/donde',
            component: Donde
        },
        {
            path: '/enque',
            component: EnQue
        }
    ]
    return(
        <Layout>
            <Switch>
                {
                    setRoutes.map( route => <Route component={route.component} exact path={route.path} /> )
                }
            </Switch>
        </Layout>
    )
}

export default Routes