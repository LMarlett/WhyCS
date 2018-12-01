import React, { Component } from 'react';
import Header from '../headerComponent/header';


var blue1;
var blue2;
var blue3;
var blue4;
var green1;
var green2;
var green3;
var green4;
var purple1;
var purple2;
var purple3;
var purple4;
var red1;
var red2;
var red3;
var red4;
var orange1;
var orange2;
var orange3;
var orange4;
var yellow1;
var yellow2;
var yellow3;
var yellow4;
var pink1;
var pink2;
var pink3;
var pink4;

// Statement Arrays by Category
var blue = [blue1,blue2,blue3,blue4]
var green = [green1,green2,green3,green4]
var purple = [purple1,purple2,purple3,purple4]
var red = [red1,red2,red3,red4]
var orange = [orange1,orange2,orange3,orange4]
var yellow = [yellow1,yellow2,yellow3,yellow4]
var pink = [pink1,pink2,pink3,pink4]

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

shuffle(blue);
shuffle(green);
shuffle(purple);
shuffle(red);
shuffle(orange);
shuffle(yellow);
shuffle(pink);

var results = { blue: 0, green: 0, purple: 0, red: 0, orange: 0,  yellow: 0, pink: 0};
// function compare(a,b) { //connect with html
//     // hardocded:
//     a = "blue"
//     b = "green"
//     if ()
//         results[a]++;
//     else 
//         results[b]++;
//      // returns 3
// }

function displayStatements(a,b,i) {
    var statementOne = a[i];
    var statementTwo = b[i];
    // compare(statementOne, statementTwo);
}

var i = 0;
displayStatements(blue,green,i);
displayStatements(purple,red,i);
displayStatements(orange,yellow,i);
if(i <= 3) { i++; } else i = 0;
displayStatements(orange,pink,i);

console.log(results);

class Quiz extends Component {
    render() {
        return (
            <div className="quiz">
                {/* <Button className='quizbtnL' onClick={this.handleValidSubmit} outline color="secondary" id="A">Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit, sed do eiusmod tempor incididunt ut labore (A)</Button>      
 
                <Button className='quizbtnR btn' onClick={this.handleValidSubmit} outline color="secondary"id="C">Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit, sed do eiusmod tempor incididunt ut labore (C)</Button>       */}
            </div>
        );
    }
}

export default Quiz;