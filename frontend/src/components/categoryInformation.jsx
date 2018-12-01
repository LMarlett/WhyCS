import React, { Component } from 'react';
import '../pages/pages.css';

class CategoryInformation extends Component {
    render() {
        return (
            <div className="categoryInfoWrapper">
                <div className="category">
                    <h3>Economic & Workforce Development</h3>
                    <p></p>
                </div>
                <div className="category">
                    <h3>Citizenship & Civic Engagement</h3>
                    <p></p>
                </div>
                <div className="category">
                    <h3>Competencies & Literacies</h3>
                    <p></p>
                </div>
                <div className="category">
                    <h3>Technological, Social & Scientific Innovation</h3>
                    <p></p>
                </div>
                <div className="category">
                    <h3>Equity & Social Justice</h3>
                    <p></p>
                </div>
                <div className="category">
                    <h3>School Reform & Improvement</h3>
                    <p></p>
                </div>
                <div className="category">
                    <h3>Personal Agency, Joy & Fulfillment</h3>
                    <p></p>
                </div>
            </div> //end of wrapper
        );
    }
}

export default CategoryInformation