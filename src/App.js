import './App.css';
import Header from './components/Homepage/Header'
import Home from './components/Homepage/Home';
import { Redirect, Route, Switch } from 'react-router';
import HomeMS from './components/ModelSpage/HomeMS';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modelS" component={HomeMS} />
        <Redirect to="/" />
      </Switch>
      
    </div>
  );
}

export default App;