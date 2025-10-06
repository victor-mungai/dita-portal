import Layout from "/src/layout/homepage_layout.jsx";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "/src/Css/technical_writing.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function technicalWriting() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [Writing, setWriting] = useState([]);

  function getWritings(i) {
    const name = Writing[i].writerName;
    const img = Writing[i].writerImage;
    const description = Writing[i].Blog;
    const topic = Writing[i].topic;
    const github = Writing[i].writerGithub;
    const topicimage = Writing[i].topicImage;
    return { name, img, description, topic, github, topicimage };
  }

  document.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const parts = String(clickedElement.id).split("Writing");
    const element = parts.length > 1 ? parts[1] : null;
    if (element !== null) {
      showSingleWriting(element);
    }
  });

  async function showSingleWriting(i) {
    const { name, img, description, topic, github, topicimage } = getWritings(i);
    navigate("/singleWriting", {
      state: { name, img, description, topic, github, topicimage },
    });
  }

  function fetchJson() {
    fetch("/api/technicalWritings")
      .then((response) => response.json())
      .then((data) => {
        setWriting(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchJson();
  }, []);

  return (
    <Layout>
      <div>
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
          <div id="technical_writing">
            <h1 className="Event__page_title" style={{ marginTop: "0px" }}>
              Technical Writing
            </h1>
            <hr className=".Achievements_hr" />
            <div className="technical_writing_content">
              {Writing.length === 0 ? (
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
                  <p style={{ fontSize: "30px" }}>No writings to display</p>
                </div>
              ) : (
                Writing.map((writing, index) => {
                  return (
                    <div
                      className="technical"
                      style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)),url(/Images/Writings/TopicImages/${writing.topicImage})`,
                        backgroundRepeat: "no-repeat",
                      }}
                      key={"Writing" + index} id={`Writing${index}`}
                    >
                      <img src={writing.writerImage} />
                      <h2>{writing.writerName}</h2>
                      <h2 className="topic">{writing.topic}</h2>
                      <p>{writing.blogTeaser}</p>
                      <div className="button_div">
                        <button id={`Writing${index}`}>Continue Reading</button>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default technicalWriting;
