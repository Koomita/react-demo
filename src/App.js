import './App.scss'
import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
// 路由
import AppRoute from './AppRoute'
// 传入redux
import { Provider } from 'react-redux'
import createStore from './redux/store'

const store = createStore()

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ul>
            {Object.keys(AppRoute).map(el => (
              <li>
                <Link to={AppRoute[el].path}>{el}</Link>
              </li>
            ))}
          </ul>
          <Suspense fallback={<div>loading...</div>}>
            <Switch>
              {Object.keys(AppRoute).map(el => {
                const item = AppRoute[el]
                return (
                  <Route
                    exact={el === 'home'}
                    key={el}
                    path={item.path}
                    component={item.component}
                  />
                )
              })}
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </div>
  )
}

export default App
