
import React, { Component } from 'react';
 import {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,

  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  WeiboShareButton,

  FacebookIcon,
  TwitterIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
} from 'react-share';

import './socials.css';
import exampleImage from '../images/whycs_blackboard.jpeg';


class CategorySquare extends Component {
    constructor(props) {
         super(props); 

    }


    render() {
        const shareUrl = 'https://www.whycs.org/startQuiz';
        const title = 'Learn about and find your personal core values in regards to computer science education. Take the WhyCS Quiz now!';
    
        return (
          <div className="Demo__container">
          <br />
            <div className="Demo__some-network">
              <FacebookShareButton
                url={shareUrl}
                quote={title}
                image={`${String(window.location)}/${exampleImage}`}

                className="Demo__some-network__share-button">
                <FacebookIcon
                  size={32}
                  round />
              </FacebookShareButton>
    
       
            </div>
    
            <div className="Demo__some-network">
              <TwitterShareButton
                url={shareUrl}
                title={title}
                image={`${String(window.location)}/${exampleImage}`}
 
                className="Demo__some-network__share-button">
                <TwitterIcon
                  size={32}
                  round />
              </TwitterShareButton>
    
              <div className="Demo__some-network__share-count">
                &nbsp;
              </div>
            </div>
    
    
            <div className="Demo__some-network">
              <GooglePlusShareButton
                url={shareUrl}
                className="Demo__some-network__share-button">
                <GooglePlusIcon
                  size={32}
                  round />
              </GooglePlusShareButton>
    
              
            </div>
    
            <div className="Demo__some-network">
              <LinkedinShareButton
                url={shareUrl}
                title={title}
                windowWidth={750}
                windowHeight={600}
                className="Demo__some-network__share-button">
                <LinkedinIcon
                  size={32}
                  round />
              </LinkedinShareButton>
     
            </div>
    
            <div className="Demo__some-network">
              <PinterestShareButton
                url={String(window.location)}
                media={`${String(window.location)}/${exampleImage}`}
 
                windowWidth={1000}
                windowHeight={730}
                className="Demo__some-network__share-button">
                <PinterestIcon size={32} round />
              </PinterestShareButton>
    
               
            </div>
    
            <div className="Demo__some-network">
              <RedditShareButton
                url={shareUrl}
                title={title}
 
                windowWidth={660}
                windowHeight={460}
                className="Demo__some-network__share-button">
                <RedditIcon
                  size={32}
                  round />
              </RedditShareButton>
    
              
            </div>
    
            <div className="Demo__some-network">
              <EmailShareButton
                url={shareUrl}
                subject={title}
                 body="We created WhyCS to highlight the importance of core values when it comes to computer science education. Different reasons for teaching computer science aren’t just important so that we can get other people to care about CS, they should also shape what our computer science classes look like - who’s in them, what kinds of things get taught and in what ways. Our values should be expressed in our practice.
                    
                This activity draws on the CSed Visions framework, which explores the varied purposes of computer science education and their intersections. Go to www.whycs.org for more info"
                className="Demo__some-network__share-button">
                <EmailIcon
                  size={32}
                  round />
              </EmailShareButton>
            </div>
          </div>
        );
}
}

export default CategorySquare;