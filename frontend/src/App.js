import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch 
} from 'react-router-dom';
import './App.css';
import "circular-std";

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
import Q11 from './components/questionComponent/q11';
import Q12 from './components/questionComponent/q12';
import Q13 from './components/questionComponent/q13';
import Q14 from './components/questionComponent/q14';
import Q15 from './components/questionComponent/q15';
import Q16 from './components/questionComponent/q16';
import Q17 from './components/questionComponent/q17';
import Q18 from './components/questionComponent/q18';
import Q19 from './components/questionComponent/q19';
import Q20 from './components/questionComponent/q20';
import Q21 from './components/questionComponent/q21';



// import Quiz from './components/questionComponent/quiz'

// import AuthExample from "./AuthExample";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          
          {/* <Route exact path='/auth' component={AuthExample} /> */}

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
          <Route path='/quiz/q11' component={Q11} />
          <Route path='/quiz/q12' component={Q12} />
          <Route path='/quiz/q13' component={Q13} />
          <Route path='/quiz/q14' component={Q14} />
          <Route path='/quiz/q15' component={Q15} />
          <Route path='/quiz/q16' component={Q16} />
          <Route path='/quiz/q17' component={Q17} />
          <Route path='/quiz/q18' component={Q18} />
          <Route path='/quiz/q19' component={Q19} />
          <Route path='/quiz/q20' component={Q20} />
          <Route path='/quiz/q21' component={Q21} />

          <Route component={Error} />
          </Switch>
         </div>
      </Router>
      
    );
  }
}

export default App;
