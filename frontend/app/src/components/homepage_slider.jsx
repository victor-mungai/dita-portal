import React, { useRef, useState, useEffect } from "react";
import linkedin from "/src/assets/linkedin.png";
import github from "/src/assets/github_logo.png";
import linkedinwhite from "/src/assets/linkedin-white.png";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function display_leaders() {
  const [number, setNumber] = useState(0);
  const displayLeaders = useRef(null);
  const [Leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  function fetchJson() {
    fetch("https://api.dita.co.ke/ditaleaders")
      .then((response) => response.json())
      .then((data) => {
        setLeaders(data);
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
    <div ref={displayLeaders} className="OurTeams" style={{ width: '100%' }}>
      {loading ? (
        <div className="loader" style={{ display: "flex", width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <PropagateLoader color="rgb(0, 0, 0)" size={20} />
        </div>
      ) : (Leaders.length > 0 ? (
        (
          Leaders.map((leader, index) => {
            console.log(leader.leaderImage)
            return (
              <div className="leader" key={index}>
                <img src={leader.leaderImage} alt={`${leader.leaderName}'s image`} />
                <h2>{leader.leaderName}</h2>
                <p>{leader.leaderRole}</p>
                <p>{leader.leaderDescription}</p>
                <div className="Links">
                  <a href={leader.linkedinLink}>
                    <img
                      src={linkedinwhite}
                      style={{ width: "25px", height: "25px" }}
                    />
                  </a>
                  <a href={leader.githubLink}>
                    <img src={github} style={{ width: "25px", height: "25px" }} />
                  </a>
                </div>
              </div>
            );
          }))
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: '94%',
          }}
        >
          <DotLottieReact
            src="https://lottie.host/08238f7a-4b5d-4237-ac9d-bb298c0f2db0/mIwHBP3n1v.lottie"
            loop
            autoplay
            style={{ width: "300px", height: "300px" }}
          />
          <p>No Leaders to display</p>
        </div>
      ))}
    </div>
  );
}

export default display_leaders;
