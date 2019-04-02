import React, { Component } from 'react';
import '../pages/pages.css';

class CategoryInformation extends Component {
    render() {
        return (
            <div className="categoryInfoWrapper">
                <p>Even with many different reasons being given for computer science education, there are some commons theme across them. Vogel, Santo and Ching (2017) put forward the <a href="https://drive.google.com/open?id=0B90AflGXRKMFdzFjYkNTTDRSR2s" rel="noopener noreferrer" target="_blank">CSed Visions Framework</a>, which found that most arguments touched on one or more of seven areas of possible impact.</p>
                <hr />
                <div className="category">
                    <h3>Economic and workforce development<small> impacts:</small></h3>
                    <p>Arguments linked in some way to professional participation in computing, labor empowerment, needs of industry, economic development, workforce pipelines, or shifting the constitution and/or focus of technology and related sectors.</p>
                    <p>This area includes statements like  “We should teach CS because…”</p>
                    <ul>
                        <li>...computing may provide our youth with more and better career opportunities to choose from.</li>
                        <li>...there is a shortage of engineers and programmers that needs to be filled.</li>
                        <li>...computational thinking will be key no matter what career youth end up in.</li>
                        <li>...it will strengthen local economies by attracting companies looking for technologically competent workers.</li>
                    </ul>
                </div>
                <hr />
                <div className="category">
                    <h3>Equity and social justice <small>impacts:</small></h3>
                    <p>Arguments that emphasized the importance of equitable distribution of various benefits associated with CS education—social, technological, economic, civic, intellectual, and otherwise. In some cases, these arguments go beyond equitable access and opportunity, suggesting that CS education could actively promote social justice impacts and the dismantling of social hierarchies.</p>
                    <p>This area includes statements like  “We should teach CS because…”</p>
                    <ul>
                        <li>...there are major disparities in minorities’ and young women’s engagement in STEM fields and universal CSed is part of addressing that.</li>
                        <li>...it will level the playing field and help close the "digital divide" around tech for lower income youth.</li>
                        <li>...not all tech will be in the best interest of our students -  they’ll need be able to think critically about technology platforms. It’s a “program or be programmed” world out there!</li>
                        <li>...our technology is largely designed by economically, racially and socially privileged groups, and their biases and blind spots get embedded in our tech. CSed can help.</li>
                    </ul>
                </div>
                <hr />
                <div className="category">
                    <h3>Competencies and literacies<small> impacts:</small></h3>
                    <p>Arguments that highlight particular  competencies (eg: design thinking, systems thinking, computational thinking, 21st century skills) as important for some broader reason—usually related to one of the other impact areas—and CS education as uniquely positioned to support these competencies.</p>
                    <p>This area includes statements like  “We should teach CS because…”</p>
                    <ul>
                        <li>...it promotes 21st century skills like creativity, collaboration and communication.</li>
                        <li>...it has students engage in design thinking - identifying problems and then prototyping, testing and iterating on solutions.</li>
                        <li>...knowing how to code is a new form of literacy.</li>
                        <li>...it can promote systems thinking - the ability to understand and intervene in complex systems that are ubiquitous in our world.</li>
                    </ul>
                </div>
                <hr />
                <div className="category">
                    <h3>Citizenship and civic engagement <small>impacts:</small></h3>
                    <p>these arguments relate CS education to social, cultural and political participation, reasoning that an increasingly technologically mediated future might impact the ways citizenship is conceptualized and enacted.</p>
                    <p>This area includes statements like  “We should teach CS because…”</p>
                    <ul>
                        <li>...being a good citizen in the 21st century will include digital citizenship.</li>
                        <li>...youth shouldn’t just be consumers but also producers of technology.</li>
                        <li>...informed citizens need to understand the basics of how the technological world works in order to contribute productively to society as a whole.</li>
                        <li>...political and cultural participation are increasingly shaped by computing and our students need to understand social impacts of tech.</li>
                    </ul>
                </div>
                <hr />
                <div className="category">
                    <h3>Scientific, technological and social innovation <small>impacts:</small></h3>
                    <p>these arguments view CS education is either a prerequisite for scientific, technological and social advancement, or that CS education will enhance society’s ability to produce such innovations and towards different ends.</p>
                    <p>This area includes statements like  “We should teach CS because…”</p>
                    <ul>
                        <li>...it’s important that people in local communities be equipped to address their own problems through having technologically fluent community members.</li>
                        <li>...the more people we have that understand computer science, the more innovations and new knowledge we can produce as a society.</li>
                        <li>...we need to produce scientific and technological innovations that solve ‘wicked’ problems such as climate change and cybersecurity.</li>
                        <li>...technological innovation helps promote human flourishing - the next generation needs to know how to do it!</li>
                    </ul>
                </div>
                <hr />
                <div className="category">
                    <h3>School improvement and reform <small>impacts:</small></h3>
                    <p>arguments linked to how CS education might work in service of broader school-reform goals, benefiting students, teachers, school administrators or broader education systems as they are today, as opposed to focusing on future pathways as workers or citizens.</p>
                    <p>This area includes statements like  “We should teach CS because…”</p>
                    <ul>
                        <li>...teaching CS is a compelling new area that teachers are interested in and is a place where they can experiment with pedagogy.</li>
                        <li>...CSed often uses project-based approaches that can enhance school pedagogy and move away from sage on the stage approaches.</li>
                        <li>...practices from CS might enhance student learning of traditional academic disciplines (e.g. - introducing computer simulation of an ecosystem to learn concepts in ecology, or using CS concepts to learn algebra).</li>
                        <li>...making technology is fun, so bringing CS to schools can increase student engagement.</li>
                    </ul>
                </div>
                <hr />
                <div className="category">
                    <h3>Personal Agency, Joy and Fulfillment <small>impacts:</small></h3>
                    <p>Arguments that cast the fun, fulfillment and personal agency associated with CS education as positive impacts for their own sake.</p>
                    <p>Sample statements include:</p>
                    <ul>
                        <li>...computing provides youth with the ability to express themselves creatively and have voice.</li>
                        <li>...being able to understand and make technologies gives kids power and agency.</li>
                        <li>...creating new technologies like apps, websites or robots is fun!</li>
                        <li>...the process of tinkering and making can lead to wonder, discovery and enjoyment.</li>
                    </ul>
                </div>
                <hr />
                <p>It’s important to note that different reasons offered around CSed shouldn’t be taken at face value - not all of them are necessarily accurate under all conditions. For example, taking the rationale that CS might help learning in other disciplines is of course contingent on designing CS lessons that actively aim to do so, the same is true for CS education’s ability to promote general ‘problem solving’ skills - research shows that this will only happen if this learning outcome is actively centered in curricular designs.</p>

 



            </div> //end of wrapper
        );
    }
}

export default CategoryInformation