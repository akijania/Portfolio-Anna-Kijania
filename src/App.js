import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/bootstrap.scss';
import './styles/global.scss';
import MainLayout from './components/layout/MainLayout/MainLayout';
import About from './components/views/About/About';
import Homepage from './components/views/Homepage/Homepage';
import NotFound from './components/views/PageNotFound/PageNotFound';
import ProjectPage from './components/views/ProjectPage/ProjectPageContainer';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/projects'} component={About} />
          <Route exact path={'/projects/:project'} component={ProjectPage} />
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
