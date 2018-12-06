import React, { Component } from 'react';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
import '../pages/pages.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, NavLink, Button, Row, Col } from 'reactstrap';

var data = [
            //EWD
             {name: 'Economic & Workforce Development', id:'blue'},
            //CC
            {name: 'Citizenship & Civic Engagement', id:'green'},
            // CL
            {name: 'Competencies & Literacies', id:'purple'},
             //TSS
            {name: 'Technological, Social & Scientific Innovation', id:'pink'},
             //ESJ
            {name: 'Equity & Social Justice', id:'red'},
            //SRI
            {name: 'School Reform & Improvement', id:'orange'},
            //PJA
            {name: 'Personal Agency, Joy & Fulfillment', id:'yellow'}
];

class CategorySquare extends Component {
    constructor(props) {
        // fires before component is mounted
        super(props); // makes this refer to this component
        this.state = {      
            fireRedirect: false,
            r1ID: '',
            r1Text: '',
            r2ID: '',
            r2Text: '',
            r3ID: '',
            r3Text: '',
       
          };
    }
    componentWillMount() {
      

        //import the window storage categories 
          var ewscount = localStorage.getItem('EWD');
          var cccount = localStorage.getItem('CC');
          var clcount = localStorage.getItem('CL');
          var tsscount = localStorage.getItem('TSS');
          var esjcount = localStorage.getItem('ESJ');
          var sricount = localStorage.getItem('SRI');
          var pjacount = localStorage.getItem('PJA');
 
        //make and array then sort
          var responses = [
                    {name: 'EWD', count: ewscount},
                    {name: 'CC', count: cccount},
                    {name: 'CL', count: clcount},
                    {name: 'TSS', count: tsscount},
                    {name: 'ESJ', count: esjcount},
                    {name: 'SRI', count: sricount},
                    {name: 'PJA', count: pjacount}
                ];

                var responsesSort = responses.sort(function (a, b) {
                    return (a.count - b.count );
                });

                alert(responses);
                alert(responses[0].name + responses[1].name + responses[2].name)


        
        //determine q1 q2 q3
        

            //output
            // rank1 = [0]
            // rank2 = [2]
            // rank3  = [3]

         
            var Rank1 = responsesSort[0].name;
            var Rank2 = responsesSort[1].name;
            var Rank3 = responsesSort[2].name;

    switch (Rank1) {
  case 'EWD':
  this.setState({
      r1Text: data[0].name,
      r1ID: data[0].id
    });
    break;
  case 'CC':
  this.setState({
    r1Text: data[1].name,
    r1ID: data[1].id
    });
    break;
  case 'CL':
  this.setState({
    r1Text: data[2].name,
    r1ID: data[2].id
    });  
    break;
  case 'TSS':
  this.setState({
    r1Text: data[3].name,
    r1ID: data[3].id
    });  
    break;
  case 'ESJ':
  this.setState({
    r1Text: data[4].name,
    r1ID: data[4].id
    });
  
    break;
  case 'SRI':
  this.setState({
    r1Text: data[5].name,
    r1ID: data[5].id  
    });

    break;
  case 'PJA':
  this.setState({
    r1Text: data[6].name,
    r1ID: data[6].id
    });


    }

    switch (Rank2) {
        case 'EWD':
        this.setState({
            r2Text: data[0].name,
            r2ID: data[0].id
          });
          break;
        case 'CC':
        this.setState({
          r2Text: data[1].name,
          r2ID: data[1].id
          });
          break;
        case 'CL':
        this.setState({
          r2Text: data[2].name,
          r2ID: data[2].id
          });  
          break;
        case 'TSS':
        this.setState({
          r2Text: data[3].name,
          r2ID: data[3].id
          });  
          break;
        case 'ESJ':
        this.setState({
          r2Text: data[4].name,
          r2ID: data[4].id
          });
        
          break;
        case 'SRI':
        this.setState({
          r2Text: data[5].name,
          r2ID: data[5].id  
          });
      
          break;
        case 'PJA':
        this.setState({
          r2Text: data[6].name,
          r2ID: data[6].id
          });
      
      
          }
      
          switch (Rank3) {
            case 'EWD':
            this.setState({
                r3Text: data[0].name,
                r3ID: data[0].id
              });
              break;
            case 'CC':
            this.setState({
              r3Text: data[1].name,
              r3ID: data[1].id
              });
              break;
            case 'CL':
            this.setState({
              r3Text: data[2].name,
              r3ID: data[2].id
              });  
              break;
            case 'TSS':
            this.setState({
              r3Text: data[3].name,
              r3ID: data[3].id
              });  
              break;
            case 'ESJ':
            this.setState({
              r3Text: data[4].name,
              r3ID: data[4].id
              });
            
              break;
            case 'SRI':
            this.setState({
              r3Text: data[5].name,
              r3ID: data[5].id  
              });
          
              break;
            case 'PJA':
            this.setState({
              r3Text: data[6].name,
              r3ID: data[6].id
              });
          
          
              }
          
                   
       
           
        
    // alert(this.state.answerOptions); 
    }
        render() {

      
        return (

        <div>
        <div id={this.state.r1ID} className="categoryBlock">
            <p>{this.state.r1Text}</p>
        </div>
       
        <div id={this.state.r2ID} className="categoryBlock">
            <p>{this.state.r2Text}</p>
        </div>

        <div id={this.state.r3ID} className="categoryBlock">
            <p>{this.state.r3Text}</p>
        </div>
        </div>
        );
        }
}

export default CategorySquare;