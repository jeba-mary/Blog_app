import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tachyons"

import { Provider } from 'react-redux';
import configureStore from '../store/store';
import { Route, Router, Switch } from 'react-router-dom';
import RegisterCreate from '../pages/registration/RegisterCreate';
import SessionCreate from '../pages/session/SessionCreate';
import ArticleList from '../components/articles/ArticleList';
import ArticleCreate from '../components/articles/ArticleCreate';
import ArticleShow from '../components/articles/ArticleShow';
import ArticleEdit from '../components/articles/ArticleEdit';
import MainLayout from '../layouts/main';
import history from '../history';
import Header from '../components/header';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
const App = (props) => (
  <Provider store={configureStore(props)}>
    <header />
    <Router history={history}>
      <div>
      <Header />
      
      <Switch>
        <Route path="/sign_up" component={RegisterCreate} />
        <Route path="/sign_in" component={SessionCreate} />

        <Route exact path ="/" component ={ArticleList} />
        <Route exact path="/articles/new" component={ArticleCreate} />
        <Route exact path="/articles/edit/:id" component={ArticleEdit} />
        <Route exact path="/articles/:id" component={ArticleShow} />
      </Switch>
      </div>
    </Router>
  
  </Provider>
);

export default App;