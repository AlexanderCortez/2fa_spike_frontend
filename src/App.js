import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainWrapper } from './components/global/MainWrapper';

const RenderNotFoundPage = () => <h4>Pagina no encontrada</h4>;

const AppMain = (props) => (
  <MainWrapper {...props}>
    <Switch>
      <Route component={RenderNotFoundPage} />
    </Switch>
  </MainWrapper>
);

const App = () => (
  <Switch>
    <Route path="/" exact component={AppMain} />
  </Switch>
);

export default App;
