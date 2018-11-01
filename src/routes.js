import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Layout from './components/HOC/Layout'
import Cuando from './components/screens/Cuando'
import Donde from './components/screens/Donde'
import EnQue from './components/screens/EnQue'

const Routes = () => {
    return(
        <Layout>
            <Switch>
                <Route path='/cuando' exact component={Cuando} />
                <Route path='/donde' exact component={Donde} />
                <Route path='/enque' exact component={EnQue} />
            </Switch>
        </Layout>
    )
}

export default Routes