import Layout from "/src/layout/homepage_layout.jsx";
import React, { useState, useEffect } from "react";
import "/src/Css/members.css";
import github from "/src/assets/github_logo.png";
import linkedinwhite from "/src/assets/linkedin-white.png";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function members() {
  const [number, setNumber] = useState(0);
  const [Members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }


  useEffect(() => {
    fetch("/api/members")
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
        <div id="members">
          <h1 className="Event__page_title">Meet Our Members</h1>
          <hr className=".Achievements_hr" />
          <div className="members_content">
            {Members.length === 0 ? (
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
                <p style={{ fontSize: "30px" }}>No Members to display</p>
              </div>
            ) : (Members.map((member, index) => {
              const color = randomColor();
              return (
                <div
                  className="member"
                  key={index}
                  style={{
                    minWidth: "300px",
                    height: "450px",
                    display: "flex",
                    flexDirection: "column",
                    background: color,
                    margin: "20px",
                    alignItems: "center",
                    paddingTop: "20px",
                  }}
                >
                  <img
                    src={member.memberImage}
                    style={{
                      width: "30%",
                      height: "40%",
                      border: "1px solid black",
                      borderRadius: "50%",
                      minWidth: "200px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                  <h2
                    style={{
                      textAlign: "center",
                      fontFamily: "roboto, sans-serif",
                      fontSize: "24px",
                    }}
                  >
                    {member.memberName}
                  </h2>
                  <p
                    style={{
                      textAlign: "center",
                      fontFamily: "roboto, sans-serif",
                      fontSize: "22px",
                    }}
                  >
                    <strong>{member.memberRole}</strong>
                  </p>
                  <div
                    style={{
                      textAlign: "center",
                      wordWrap: "break-word",
                      overflowWrap: "break-word",
                      maxWidth: "90%",
                    }}
                  >
                    {member.memberDescription}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "20px",
                      alignItems: "center",
                    }}
                  >
                    <a href={member.linkedinLink}>
                      <img
                        src={linkedinwhite}
                        style={{
                          width: "25px",
                          height: "25px",
                          marginRight: "10px",
                        }}
                      />
                    </a>
                    <a href={member.githubLink}>
                      <img
                        src={github}
                        style={{
                          width: "20px",
                          height: "20px",
                          marginTop: "2px",
                        }}
                      />
                    </a>
                  </div>
                </div>
              );
            }))}
          </div>
        </div>
      )}
    </Layout>
  );
}

export default members;
