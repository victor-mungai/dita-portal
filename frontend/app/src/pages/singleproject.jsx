import { useLocation } from "react-router-dom";
import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/singleProject.css";

function single_project() {
  const location = useLocation();
  const { name, img, description, link, github } = location.state || {};
  const str = img;
  const match = str.match(/https:\/\/res\.cloudinary\.com\/\S+/);
  return (
    <Layout>
      <h1 className="project_title" style={{}}>
        {name}
      </h1>
      <hr style={{ marginBottom: "50px" }} />
      <div className="single_project">
        <div id="project-content">
          <div id="project-description">{description}</div>
          <p id="project-link">
            <a href={link}>{link}</a>
          </p>
          <p id="project-github">
            <a href={github}>Github</a>
          </p>
          <p id="project-github">
            <a href={github}>View Project</a>
          </p>
        </div>

        <div className="project-img" id="project-img">
          <img src={img} alt={name} />
        </div>
      </div>
    </Layout>
  );
}
export default single_project;
