import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/projects.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function projects() {
  const navigate = useNavigate();
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  function getProjects(i) {
    if (Projects) {
      const name = Projects[i].projectName;
      const img = Projects[i].projectImage;
      const description = Projects[i].projectDetailedDescription;
      const link = Projects[i].projectLink;
      const github = Projects[i].projectGithub;
      return { name, img, description, link, github };
    }
  }

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  document.addEventListener("click", (event) => {
    const clickedElement = event.target; // or event.currentTarget
    const parts = String(clickedElement.id).split("Project");
    const element = parts.length > 1 ? parts[1] : null;
    if (element !== null) {
      showSingleProject(element);
    }
  });

  function showSingleProject(i) {
    const { name, img, description, link, github } = getProjects(i);
    navigate("/singleProject/", {
      state: { name, img, description, link, github },
    });
  }

  useEffect(() => {
    fetch("/api/projects")

      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Set the state
        setLoading(false);
      })
      .catch((error) => {
        console.log(error); // Handle any errors
      });
  }, []);

  return (
    <Layout>
      {loading ? (
        <PropagateLoader
          color="#02133e"
          loading={loading}
          cssOverride={{
            position: "fixed",
            top: "50%",
            left: "45%",
            transform: "translate(-50%, -50%)",
          }}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <div id="projects">
          {/* Make a general css for this */}
          <h1 className="Event__page_title">Explore Our Projects</h1>
          <hr />
          <div className="projects_content">
            {Projects.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: '94%',
                  height: '80vh'
                }}
              >
                <DotLottieReact
                    src="https://lottie.host/08238f7a-4b5d-4237-ac9d-bb298c0f2db0/mIwHBP3n1v.lottie"
                    loop
                    autoplay
                    style={{ width: "100%", height: "100%" }}
                  />
                <p style={{ fontSize: "30px" , textAlign: 'center' }}>No projects to display</p>
              </div>
            ) : (
              Projects.map((project, index) => {
                const color = randomColor(); // Ensure `randomColor` is defined
                return (
                  <div
                    key={`Project${index}`}
                    id={`Project${index}`}
                    className="project"
                    style={{
                      width: "500px",
                      minWidth: "300px",
                      height: "500px",
                      display: "flex",
                      flexDirection: "column",
                      background: color,
                      margin: "10px",
                      alignItems: "center",
                      boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                      paddingTop: "20px",
                      cursor: "pointer",
                    }}
                  >
                    <h2
                      style={{
                        textAlign: "center",
                        fontFamily: "Roboto, sans-serif",
                        fontSize: "24px",
                      }}
                    >
                      {project.projectName}
                    </h2>
                    <img
                      src={project.projectImage}
                      alt={`${project.projectName}`}
                      style={{
                        width: "70%",
                        height: "70%",
                        minWidth: "200px",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                    <div
                      style={{
                        marginTop: "20px",
                        textAlign: "center",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                        maxWidth: "90%",
                      }}
                    >
                      {project.projectSmallDescription}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default projects;
