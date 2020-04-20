import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import store from 'store';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

import { routes } from 'routes';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to="/notes" />} />
          <Route exact path={routes.notes} component={Notes} />

          <Route exact path={routes.articles} component={Articles} />

          <Route exact path={routes.twitters} component={Twitters} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
