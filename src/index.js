import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
<<<<<<< HEAD
import { BrowserRouter, Route } from 'react-router-dom';
=======
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
>>>>>>> c0b5ff41e14f23d94b99aefbdc1755c640d8f629

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Hello extends React.Component {
    render() { return <div>Hello</div> }
}

class Bye extends React.Component {
    render() { return <div>Goodbye</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
<<<<<<< HEAD
    <div>
        <Route path="/hello" component={Hello}/>
        <Route path="/goodbye" component={Bye}/>
    </div>
=======
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/" component={PostsIndex} />
            </Switch>
        </div>
>>>>>>> c0b5ff41e14f23d94b99aefbdc1755c640d8f629
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
