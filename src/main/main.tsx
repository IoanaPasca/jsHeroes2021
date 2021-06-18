import { Redirect, Route, Switch } from 'react-router-dom';
import { AccountPage } from '../pages/account/acount.page';
import { LoginPage } from '../pages/login/login.page';

export function MainPage() {
  return (
    <Switch>
      <Route exact path={'/login'} component={LoginPage} />
      <Route exact path={'/account'} component={AccountPage} />
      <Route  path={'/'}>
            <Redirect to={'/account'} />
      </Route>
    </Switch>
  )
  
}