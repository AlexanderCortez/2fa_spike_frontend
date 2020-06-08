import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainWrapper } from './components/global/MainWrapper';
import { TwoStepComponent } from './components/two-step/TwoStepComponent';
import { LoginComponent } from './components/login/LoginComponent';

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
    <Route path="/login" component={LoginComponent} />
    <Route path="/" component={AppMain} />
  </Switch>
);

export default App;
