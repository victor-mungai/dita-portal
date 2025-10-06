// import React from "react";
import "../Css/homepage.css";
import location_icon from "/src/assets/location_icon.png";
import email_icon from "/src/assets/email_icon.png";
import phone_icon from "/src/assets/phone_icon.png";
import computer_repair from "/src/assets/computer_repair.jpeg";
import software_update from "/src/assets/software_updates.jpeg";
import teaching from "/src/assets/teaching.jpeg";
import google_logo from "/src/assets/googleLogo-b0b9055a.png";
import ibm_logo from "/src/assets/ibmLogo-2c76d577.png";
import oracle_logo from "/src/assets/oracleLogo-cb5b4052.png";
import huawei_logo from "/src/assets/huaweiLogo-3cef1ad7.png";
import linkedin from "/src/assets/linkedin.png";
import github from "/src/assets/github_logo.png";
import instagram from "/src/assets/instagram_logo.png";
import Homepage_layout from "/src/layout/homepage_layout.jsx";
import { Link } from "react-router-dom";
import dita_logo from "/public/ditaLogo-3d409f18.png";
import Homepage_slider from "/src/components/homepage_slider.jsx";

function homePage() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Homepage_layout>
      <div id="home_page">
        <div className="home_about">
          <div className="home_about_text">
            <h5>Unlocking Potential Through Technology</h5>
            <h1>Elevate. Innovate.</h1>
          </div>
          <div className="home_about_img"></div>
        </div>

        <div className="home_about_phone_view">
          <div>
            <h1>Elevate. Innovate.</h1>
            <h5>Unlocking Potential Through Technology</h5>
          </div>
        </div>

        <div className="home_services">
          <h1>Discover Our Wide Range Of Services</h1>
          <div id="services">
            <div>
              <img src={computer_repair}></img>
              <h2>Computer & Laptop Repairs</h2>
              <p>
                Empowering devices, unleashing potential. Expert computer &
                laptop repairs for students & beyond.Trust us with your tech
                challenges. At dita your digital journey begins here
              </p>
              <p className="learn_more1">Learn More</p>
            </div>
            <div>
              <img src={software_update}></img>
              <h2>Software Update & Installation</h2>
              <p>
                Stay current, stay secure. Seamless software updates and
                installation services for optimised performance. Unlock the
                latest features and protect your system.
              </p>
              <p className="learn_more2">Learn More</p>
            </div>
            <div>
              <img src={teaching}></img>
              <h2>Teaching & Training for students</h2>
              <p>
                Empowering students with the latest tech know-how. Learn
                software updates & installation from the experts. Stay ahead in
                the digital age with our student-focused teaching and training
                services
              </p>
              <p className="learn_more3">Learn More</p>
            </div>
          </div>
        </div>

        <div className="home_meet_team">
          <h1>Meet Our Team</h1>
          <p>Meet Our Team. Get to know the talented individuals behind DITA</p>

          <div className="OurTeams">
            <Homepage_slider />
          </div>
        </div>

        <div className="home_mission">
          <h1>Dita's Mission</h1>
          <p>
            Empowering Daystar Community and Beyond with enough Information Technology
          </p>
        </div>

        <div className="home_vision">
          <h1>Dita's Vision</h1>
          <p>
            Vision: Delivering innovative and value-driven ICT products and services with excellence.
          </p>
        </div>

        <div className="home_contact">
          <h1>Contact Us</h1>
          <div className="contact_details">
            <div>
              <img src={email_icon}></img>
              <h2>Email</h2>
              <p>
                For any inquiries or collaborations, please reach out on our
                email
              </p>
              <a href="mailto:Dita@daystar.ac.ke" className="Email">Dita@daystar.ac.ke</a>
            </div>
            <div>
              <img src={phone_icon}></img>
              <h2>Phone</h2>
              <p>Feel free to give us a call or send us a message</p>
              <a href="tel:+254 712-345-6789" className="phone">
                +254 712-345-6789
              </a>
            </div>
            <div>
              <img src={location_icon}></img>
              <h2>Location</h2>
              <p>Visit our office during school hours</p>
              <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=556283150&tbs=lf:1,lf_ui:2&tbm=lcl&q=daystar+athi+river&rflfq=1&num=10&rldimm=8008581111557565122&ved=2ahUKEwifxOD-hteAAxUraqQEHW5kCtQQu9QIegQIFxAM#rlfi=hd:;si:15838964805034482325,l,ChJkYXlzdGFyIGF0aGkgcml2ZXJI0Nm6AlocEAAYABgBGAIiEmRheXN0YXIgYXRoaSByaXZlcpIBCnVuaXZlcnNpdHmqAUgQASoLIgdkYXlzdGFyKAAyHxABIhs4-oiECcpChLsDMA1gYih2KRfv-BB8X1rDl-0yFhACIhJkYXlzdGFyIGF0aGkgcml2ZXI;mv:[[-1.4351547,37.050985499999996],[-1.4816166,36.972613599999995]]">
                <p>Daystar University, ATHI RIVER, Kenya</p>
              </a>
            </div>
          </div>
        </div>

        <div className="home_partnerships">
          <div>
            <h1>Partnerships</h1>
            <p>
              Proud partners in the Daystar University Resource Lab for
              Technology and Computer Science: Microsoft, Google, IBM, Huawei
              and more!
            </p>
          </div>

          <div>
            <img src={google_logo}></img>
            <img src={ibm_logo}></img>
            <img src={oracle_logo}></img>
            <img src={huawei_logo}></img>
          </div>
        </div>

        {/* <div className="empty_div"></div> */}

        <div className="home_footer">
          <div className="footer_links">
            <div>
              <Link to="/">
                <img src={dita_logo} className="dita_logo" />
              </Link>
            </div>

            <div className="related_links">
              <h2>Related Links</h2>
              <p>
                <a href="https://elearning.daystar.ac.ke/">E-Learning</a>
              </p>

              <a href="https://student.daystar.ac.ke/">Student Portal</a>
            </div>

            <div>
              <h2>Contact Us</h2>
              <p>
                Outlook: <a href="mailto:Dita@daystar.ac.ke">dita@daystar.com</a>
              </p>
              Location:
              <a href="https://www.google.com/search?client=firefox-b-d&sca_esv=556283150&tbs=lf:1,lf_ui:2&tbm=lcl&q=daystar+athi+river&rflfq=1&num=10&rldimm=8008581111557565122&ved=2ahUKEwifxOD-hteAAxUraqQEHW5kCtQQu9QIegQIFxAM#rlfi=hd:;si:15838964805034482325,l,ChJkYXlzdGFyIGF0aGkgcml2ZXJI0Nm6AlocEAAYABgBGAIiEmRheXN0YXIgYXRoaSByaXZlcpIBCnVuaXZlcnNpdHmqAUgQASoLIgdkYXlzdGFyKAAyHxABIhs4-oiECcpChLsDMA1gYih2KRfv-BB8X1rDl-0yFhACIhJkYXlzdGFyIGF0aGkgcml2ZXI;mv:[[-1.4351547,37.050985499999996],[-1.4816166,36.972613599999995]]">
                Daystar University, ATHI RIVER , KENYA
              </a>
            </div>
          </div>

          <hr className="footer_hr" />

          <div className="links">
            <a href="https://www.linkedin.com/company/dita-daystar-university">
              <img src={linkedin} />
            </a>
            <a href="https://github.com/dita-daystaruni">
              <img src={github} />
            </a>
            <a href="https://www.instagram.com/dita.daystar/">
              <img src={instagram} />
            </a>
          </div>


          <p className="copyright">© {currentYear} | All Rights Reserved</p>
        </div>
      </div>
    </Homepage_layout>
  );
}

export default homePage;
