import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { MainWrapper } from './components/global/MainWrapper';
import SignUpContainer from './components/signup/SignUpContainer';
import LogInContainer from './components/login/LogInContainer';
import Authenticate from './helpers/Authenticate';
import TwoStepContainer from './components/two-step/TwoStepContainer';

const RenderNotFoundPage = () => <h2>Pagina no encontrada</h2>;

const AppMain = (props) => (
  <MainWrapper {...props}>
    <Switch>
      <Route path="/" component={TwoStepContainer} />
      <Route component={RenderNotFoundPage} />
    </Switch>
  </MainWrapper>
);

const App = () => (
  <Switch>
    <Route path="/signin" component={LogInContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/" component={Authenticate(withRouter(AppMain))} />
  </Switch>
);

export default App;
