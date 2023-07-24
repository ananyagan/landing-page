import React from 'react';
import './App.css';

function App() {
  return (
    <div className="landing-page">
      <header className="header"> 
        <h1 class="text-orange-600">Document AI</h1>
        <p>Use Document AI to query information from a documents using natural language</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2 className="">Named Entity Retrieval</h2>
          <p>
          The system is able to identify and retrieve named entities from the uploaded documents.
          </p>
        </div>
        <div className="feature">
          <h2>Yes/No Answer Retrieval</h2>
          <p>
            
The system is able to answer yes or no questions based on the uploaded documents.
          </p>
        </div>
        <div className="feature">
          <h2>Accuracy Measurements</h2>
          <p>
          The system is able to provide a level of accuracy with both training and real time data.
          </p>
        </div>
        <div className="feature">
          <h2>Natural Language Doc Querying
</h2>
          <p>
          The system allows users to query the document using natural language and return relevant responses.
          </p>
        </div>
        <div className="feature">
          <h2>Query Interface</h2>
          <p>
          The system provides an interface for users to enter natural language questions.
          </p>
        </div>
      </section>

      <section>
          <div className="feature">
            <h2>Benefits</h2>
            <p>Why Document AI is for you?</p>
            <ul>
              <li>Extract important information with one simple click</li>
              <li>Handles large document sizes</li>
              <li>Your documents remain confidential and secured</li>
              <li>Can integrate with other systems or services</li>
            </ul>
            <p>
            </p>
          </div>
          <div className="feature">
            <h2>There's More</h2>
            <p>Why Document AI is for you?</p>
            <ul>
              <li>Extremely user friendly with clear navigation</li>
              <li>Handles a large number of simultaneous users without losing quick performamce</li>
              <li>Simply create one template and be able to use it across multiple documents</li>
            </ul>
            <p>
            </p>
          </div>
        </section>

      <h1 class="faq-heading">FAQ'S</h1>
      <section class="faq-container">
      <div class="faq-one">
                <h1 class="faq-page">
How is this different from other AI tools?</h1>
                <div class="faq-body">
                    <p>It is unique.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-two">
                <h1 class="faq-page">Is it capable of managing both functional and nonfunctional requirements?</h1>
                <div class="faq-body">
                    <p>Yes, as it helps with document uploads as well as usability.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-three">
<h1 class="faq-page">What documents can it be tested on?</h1>
                <div class="faq-body">
                    <p>An example document would be medical documents.</p>
                </div>
            </div>
            <hr class="hr-line"></hr>

            <div class="faq-four">           
<h1 class="faq-page">System Requirements</h1>
                <div class="faq-body">
                    <p>There are no such system requirements needed.</p>
                </div>
            </div>

      </section>
      <section>
      <header className="header"></header>
        <h2 class="text-orange-500">Are You Ready to Easily Extract Required Data?</h2>
        <button className="cta-button">Get Started</button>
      </section>

      
      {/* <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Landing Page. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default App;
var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");
        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}