import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/catalog" exact component={Home} />
      <Route path="/cart" component={Cart} />
      <Route path="/Signin" component={Signin} />
      <Route path="/Signup" component={Signup} />
    </Switch>
  );
};

export default Routes;