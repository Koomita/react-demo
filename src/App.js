import './App.scss'
import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
// 路由
import AppRoute from './AppRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            {Object.keys(AppRoute).map(el => {
              const item = AppRoute[el]
              return (
                <Route
                  exact={el === 'home'}
                  key={el}
                  path={item.path}
                  component={item.component} />
              )
            })}
          </Switch>
        </Suspense>
      </Router>
    </div>
  )
}

export default App
