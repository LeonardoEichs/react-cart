import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFoundPage from "pages/NotFoundPage";
import Catalogue from "pages/Catalogue";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Catalogue} />
      <Route exact path="*" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Routes;
