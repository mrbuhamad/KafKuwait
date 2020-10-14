import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ComingSoon from "../ComingSoon";
import PageNotFound from "../../components/PageNotFound";
import {ComingSoonEcommerce} from "../ComingSoonEcommerce";
import {ComingSoonFurniture} from "../ComingSoonFurniture";
import ComingSoonIco from "../ComingSoonIco";
import ComingSoonTravel from "../ComingSoonTravel";
import DemoSwitcher from "../../components/DemoSwitcher";

import './style.scss';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Switch>
                  <Route exact path="/" component={ComingSoonEcommerce} />
                  <Route path="/furniture" component={ComingSoonFurniture} />
                  <Route path="/dark" component={ComingSoon} />
                  <Route path="/ico" component={ComingSoonIco} />
                  <Route path="/travel" component={ComingSoonTravel} />
                  <Route exact component={PageNotFound} />
              </Switch>
              <DemoSwitcher/>
          </div>
      </BrowserRouter>

  );
}

export default App;
