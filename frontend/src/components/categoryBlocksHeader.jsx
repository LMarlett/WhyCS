import React, { Component } from 'react';
import '../pages/pages.css';

class CategoryBlocksHeader extends Component {
    render() {
        return (
            <div className="categoryBlocks_wrapper">
              
                <div className="categoryBlock" id="blue">
                    <p>Economic & Workforce Development</p>
                </div>

                <div className="categoryBlock" id="green">
                    <p>Citizenship & Civic Engagement</p>
                </div>

                <div className="categoryBlock" id="purple">
                    <p>Competencies & Literacies</p>
                </div>

                <div className="categoryBlock" id="pink">
                    <p>Technological, Social & Scientific Innovation</p>
                </div>
            
                <div className="categoryBlock" id="red">
                    <p>Equity & Social Justice</p>
                </div>
            
                <div className="categoryBlock" id="orange">
                    <p>School Reform & Improvement</p>
                </div>
            
                <div className="categoryBlock" id="yellow">
                    <p>Personal Agency, Joy & Fulfillment</p>
                </div>
            </div>
        );
    }
}
export default CategoryBlocksHeader;