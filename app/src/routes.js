import React from 'react'
import {Switch, Route} from 'react-router'
import home from './components/home'
import you from './components/you'
import videos from './components/videosColumn'
import error from './components/error'

let routes = ( 
<Switch>
<Route exact path="/" component={home}/>
<Route path="/you" component={you}/>
<Route path="/videoColumn" component={videos}/>
<Route component={error} /> 
</Switch>

)
export default routes;
