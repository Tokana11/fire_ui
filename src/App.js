import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation.jsx';
import TruckRouter from './components/truck/TruckRouter.jsx';
import HomePage from './pages/HomePage.jsx';

const Layout = props => (
  <>
    <Navigation />
    <div className="container mt-5">
      {props.children}
    </div>
  </>
)

const routes = [
  {
    path: '/',
    element: <Layout>
      <HomePage />
    </Layout>

  },
  {
    path: 'trucks/*',
    element: <Layout>
      <TruckRouter />
    </Layout>
  },

]

const getRoutes = () => {
  return routes.map((route, index) => {
    return <Route
      exact={route.exact}
      key={index}
      path={route.path}
      element={route.element}
    >
    </Route>
  })
}


function App() {
  return (
    <Router>
      <Routes>
        {getRoutes()}
      </Routes>
    </Router>
  )
}

export default App;
