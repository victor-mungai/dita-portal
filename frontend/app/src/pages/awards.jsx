import Layout from "/src/layout/homepage_layout.jsx";
import "/src/Css/hackathon.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from "react";

function awards() {
  const [Awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(false);

  function randomColor() {
    const red = Math.floor(Math.random() * 49) + 207;
    const green = Math.floor(Math.random() * 49) + 207;
    const blue = Math.floor(Math.random() * 49) + 207;
    return `rgb(${red}, ${green}, ${blue})`;
  }

  useEffect(() => {
    fetch("/api/awards")
      .then((response) => response.json())
      .then((data) => {
        setAwards(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  return (
    <Layout>
      {
        loading ? (
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
          <div>
            <h1 className="Event__page_title">Awards</h1>
            <hr />
            <div className="Content" >
              {Awards.length === 0 ? (
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
              ) : (Awards.map((awards, index) => {
                const color = randomColor();
                return (
                  <div className="hackathon" key={index} style={{ background: color }}>
                    <img src={awards.awardsImage} width={'50%'} height={'90%'} />
                    <div style={{ width: '40%' }}>
                      <h1>{awards.awardsName}</h1>
                      <h2>{awards.awardsDate}</h2>
                      <div className="details" >{awards.awardsDescription}</div>
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

export default awards;
