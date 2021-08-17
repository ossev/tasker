import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import Tasks from './components/Tasks';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          {/* <Route exact path="/admin/login" component={Login}></Route> */}
          <Route exact path="/tasks" component={Tasks}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
  </BrowserRouter>
  );
}

export default App;
