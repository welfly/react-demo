import React, { PureComponent, Fragment } from 'react';
import Headers from './comm/Header/headerindex';
import { GlobalStyle } from './GlobalStyle.js'
import { GlobalIconfont } from './statics/iconfot/iconfont.js'
import { Provider } from 'react-redux';
import store from './store/createStore'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Details from './pages/Details/index';


class App extends PureComponent {
  render() {
    return (
        <Fragment>
          <GlobalStyle />
          <GlobalIconfont />
          <Provider store={store}>
              <Router>
                <div>
                  <Headers />
                  {/* 注意，使用Link组件的是时候，需要将Link放在Router组件的内部 不然会报错 You should not use <Link> outside a <Router>*/}
                  {/* <Route path="/" exact render={() => <div>home</div>}></Route> */}
                  <Route path="/" exact component={Home}></Route>
                  {/* <Route path="/details" exact render={() => <div>details</div>}></Route> */}
                  <Route path="/details/:id" component={Details}></Route>
                </div>
              </Router>
          </Provider>
        </Fragment>
     );
  }
}

export default App;
