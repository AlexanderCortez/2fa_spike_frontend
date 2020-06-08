import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainWrapper } from './components/global/MainWrapper';
import { TwoStepComponent } from './components/two-step/TwoStepComponent';
import { LoginComponent } from './components/login/LogInComponent';
import { SignUpComponent } from './components/signup/SignUpComponent';

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
    <Route path="/signin" component={LoginComponent} />
    <Route path="/signup" component={SignUpComponent} />
    <Route path="/" component={AppMain} />
  </Switch>
);

export default App;
