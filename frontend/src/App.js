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
  import QuizStart from './pages/quizStart';
import Resources from './pages/resources';
import Results from './pages/results';
import Home from './pages/homepage';

import Q1 from './components/questionComponent/q1';
import Q2 from './components/questionComponent/q2';
import Q3 from './components/questionComponent/q3';
import Q4 from './components/questionComponent/q4';
import Q5 from './components/questionComponent/q5';
import Q6 from './components/questionComponent/q6';
import Q7 from './components/questionComponent/q7';
import Q8 from './components/questionComponent/q8';
import Q9 from './components/questionComponent/q9';
import Q10 from './components/questionComponent/q10';

import Quiz from './components/questionComponent/quiz'

import AuthExample from "./AuthExample";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          
          <Route exact path='/auth' component={AuthExample} />

          <Route exact path='/about' component={About} />
          <Route exact path='/home' component={Home} />
          <Route path='/' component={Home} exact/>

          <Route path='/contact' component={Contact} />
          <Route path='/quiz/start' component={QuizStart} />
          <Route path='/resources' component={Resources} />
          <Route path='/results' component={Results} />

          {/* <Route path='/quiz' component={Quiz} /> */}
          <Route path='/quiz/q1' component={Q1} />
          <Route path='/quiz/q2' component={Q2} />
          <Route path='/quiz/q3' component={Q3} />
          <Route path='/quiz/q4' component={Q4} />
          <Route path='/quiz/q5' component={Q5} />
          <Route path='/quiz/q6' component={Q6} />
          <Route path='/quiz/q7' component={Q7} />
          <Route path='/quiz/q8' component={Q8} />
          <Route path='/quiz/q9' component={Q9} />
          <Route path='/quiz/q10' component={Q10} />

          <Route component={Error} />
          </Switch>
         </div>
      </Router>
      
    );
  }
}

export default App;
