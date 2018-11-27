import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import './App.css';

//import Navigation from './pages/navigation';

import About from './pages/about';
import Contact from './pages/contact';
 import Homepage from './pages/homepage';
import QuizPage from './pages/quizPage';
import QuizStart from './pages/quizStart';
import Resources from './pages/resources';
import Results from './pages/results';
 
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
         <Route exact path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Homepage} exact/>
          <Route path='/whycsquiz' component={QuizPage} />
          <Route path='/startwhycsquiz' component={QuizStart} />
          <Route path='/resources' component={Resources} />
          <Route path='/results' component={Results} />
          <Route component={Error} />
          </Switch>
         </div>
      </Router>
      
    );
  }
}

export default App;
