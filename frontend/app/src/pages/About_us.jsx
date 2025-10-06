// import Main_layout from "/src/layout/Main_layout.jsx";
import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/about_us.css";
import image from "/src/assets/daystar_logo.jpeg";

function About_us() {
  return (
    <Layout>
      <div id="about_us">
        <div className="about_content">
          <div className="about_us_text">
            <h1 className="Event__page_title" >About Us</h1>
            <p>
              DITA is first of all a community. We learn together and grow
              together. We strive for excellence as upcoming professionals.
              <br />
              We are quick to embrace new members & introduce them into our
              culture. We are a tech hub.Technology is our surname. In DITA, you
              matter.
            </p>
          </div>
          <div className="about_us_img"></div>
        </div>

        <div id="about_content_phone_view">
          <h1 className="Event__page_title">About us</h1>
          <hr />
          <div className="about_content_phone_view">
            <img src={image} />
            <p>
              DITA is first of all a community. We learn together and grow
              together. We strive for excellence as upcoming professionals. We
              are quick to embrace new members & introduce them into our
              culture. We are a tech hub.Technology is our surname. In DITA, you
              matter.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About_us;
