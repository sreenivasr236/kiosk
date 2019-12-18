import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginview from './views/loginview/loginview';
import Locationsearchview from './views/locationsearchview/locationsearchview';
import Playvideoview from './views/playvideoview/playvideoview';
import Howitworksview from './views/howitworksview/howitworksview'
import Chooseacar from './views/chooseacarview/chooseacarview';
import Packageview from './views/packageview/packageview'



export const Routes = () => {
    return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Loginview} ></Route>
                    <Route exact path="/locationsearch" component={Locationsearchview} ></Route>
                    <Route exact path="/playvideo" component={Playvideoview} ></Route>
                    <Route exact path="/howitworks" component={Howitworksview} ></Route>
                    <Route exact path="/chooseacar" component={Chooseacar} ></Route>
                    
                    <Route exact path="/package" component={Packageview} ></Route>
                </Switch>
            </Router>
        )
}

export default Routes