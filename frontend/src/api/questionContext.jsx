
import React, { Component } from 'react';
import tuples from './touples';
import _ from 'lodash';

const questionArray = React.createContext();

class QuestionContext extends Component {
  state = {  
        shuffle:  _.shuffle(tuples),
    }
  // render() {
  //     return <questionArray.Provider value={this.state}>
  //       {this.props.children}
  //     </questionArray.Provider>
  //   }
  }

  export default QuestionContext;

// 
// const AppContext = React.createContext()
// class AppProvider extends Component {
//   state = {
//     number : 10
//   }
// render() {
//     return <AppContext.Provider value={this.state}>
//       {this.props.children}
//     </AppContext.Provider>
//   }
// }
// const Green = () => (
//   <div className="green">
//       <AppContext.Consumer>
//         {(context) => context.number}
//       </AppContext.Consumer>
//   </div>
// )
// const Blue = () => (
//   <div className="blue">
//     <Green />
//   </div>
// )
 
// class Red extends Component {
//   render() {
//     return  <AppProvider> 
//         <div className="red">
//           <AppContext.Consumer>
//             {(context) => context.number}
//           </AppContext.Consumer>
//           <Blue />
//         </div>
//     </AppProvider>
//   }
// }
// 

//create a tuple shuffled 
//from shuffledTuple.jsx




// export const tupleShuffled = questionArray.shuffledTuple;
 