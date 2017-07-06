import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));

//import React from 'react';
////import { render } from 'react-dom';
//import Main from './components/Main';
//import Single from './components/Single';
//import PhotoGrid from './components/PhotoGrid';
////import './styles/style.styl';


//import react router deps
//import { BrowserRouter, Match, Route } from 'react-router-dom';
//import {Router, Route, IndexRoute, browserHistory } from 'react-router';


////class Main extends React.Component {
//const Root = () => {
//	constructor() {
//		super();
//////	}
////	return (
//		<BrowserRouter>
//		<div>
//		<Route path="/" component={Main} />
//		<Route path="/view/:postId" component={PhotoGrid} />
//		</div>
//		</BrowserRouter>
//		)
//}

render(<Root/>, document.getElementById('root'));
//const router = (
//	<Router history={browserHistory}>
//		<Route path="/" component={Main}>
//			<IndexRoute component={PhotoGrid}></IndexRoute>
//			<Route path="/view/:postId" component={Single}></Route>
//	</Router>
//	)

//render (router, document.getElementById('root'));