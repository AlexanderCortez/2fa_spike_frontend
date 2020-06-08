import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainWrapper } from './components/global/MainWrapper';
import { TwoStepComponent } from './components/two-step/TwoStepComponent';
import SignUpContainer from './components/signup/SignUpContainer';
import LogInContainer from './components/login/LogInContainer';
import Authenticate from './helpers/Authenticate';

const RenderNotFoundPage = () => <h2>Pagina no encontrada</h2>;

const AppMain = (props) => (
  <MainWrapper {...props}>
    <Switch>
      <Route path="/" component={TwoStepComponent} />
      <Route component={RenderNotFoundPage} />
    </Switch>
  </MainWrapper>
);

const App = () => (
  <Switch>
    <Route path="/signin" component={LogInContainer} />
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/" component={Authenticate(AppMain)} />
  </Switch>
);

export default App;
