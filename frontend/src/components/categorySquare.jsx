import React, { Component } from 'react';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
import '../pages/pages.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, NavLink, Button, Row, Col } from 'reactstrap';

const data = [
    {name: 'Economic & Workforce Development', id:'blue'},
    {name: 'Citizenship & Civic Engagement', id:'green'},
    {name: 'Competencies & Literacies', id:'purple'},
    {name: 'Technological, Social & Scientific Innovation', id:'pink'},
    {name: 'Equity & Social Justice', id:'red'},
    {name: 'School Reform & Improvement', id:'orange'},
    {name: 'Personal Agency, Joy & Fulfillment', id:'yellow'}
];

class CategorySquare extends Component {
    constructor(props) {
        // fires before component is mounted
        super(props); // makes this refer to this component
        this.state = {data}; // set state
        }
        render() {
        return (
            <div>
        <div id={this.state.id='blue'} className="categoryBlock">
            <p>{this.state.name}</p>
        </div>
        <div id={this.state.id='green'} className="categoryBlock">
            <p>{this.state.data.name}</p>
        </div>
        <div id={this.state.id='yellow'} className="categoryBlock">
            <p>{this.state.data.name}</p>
        </div>
        </div>
        );
        }
}

export default CategorySquare;