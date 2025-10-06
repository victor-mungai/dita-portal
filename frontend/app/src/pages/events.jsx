import "/src/Css/events.css";
import Layout from "/src/layout/homepage_layout.jsx";
import React, { useEffect, useState } from "react";
import Calender from "/src/components/calender.jsx";
import { useNavigate } from "react-router-dom";
import PropagateLoader from "react-spinners/PropagateLoader";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function events() {
  const navigate = useNavigate();
  const [Events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // const displaybutton = useRef(null);

  const daysofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.addEventListener("click", (event) => {
    const clickedElement = event.target; // or event.currentTarget
    const parts = String(clickedElement.id).split("Events");
    const element = parts.length > 1 ? parts[1] : null;
    if (element !== null) {
      showSingleEvent(element);
    }
  });

  function getEvents(i) {
    if (Events !== null) {
      const title = Events[i].eventName;
      const start = Events[i].eventDate;
      const description = Events[i].eventSmallDescription;
      const link = Events[i].eventLink;
      const img = Events[i].eventImage;
      const details = Events[i].eventDetailedDescription;
      const time = Events[i].eventTime;
      const Eventlocation = Events[i].eventVenue;
      const registration_details = Events[i].registrationDetail;
      return {
        title,
        description,
        link,
        img,
        details,
        time,
        Eventlocation,
        registration_details,
      };
    }
  }

  function showSingleEvent(i) {
    // console.log(i);
    const {
      title,
      description,
      link,
      img,
      details,
      time,
      Eventlocation,
      registration_details,
    } = getEvents(i);
    navigate("/singleEvent/", {
      state: {
        title,
        description,
        link,
        img,
        details,
        time,
        Eventlocation,
        registration_details,
      },
    });
  }



  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data); // Set the state
        setLoading(false);
      })
      .catch((error) => {
        console.log(error); // Handle any errors
      });
  }, []);

  function eventDay(event) {
    const date = new Date(event.eventDate);
    const daydate = date.getDate();
    return daydate;
  }

  function eventMonth(event) {
    const date = new Date(event.eventDate);
    const month = date.getMonth();
    return months[month];
  }

  return (
    <Layout>
      {loading ? (
        <PropagateLoader color="#02133e" loading={loading} cssOverride={{
          position: "fixed",
          top: "50%",
          left: "45%",
          transform: "translate(-50%, -50%)",
        }} size={50} aria-label="Loading Spinner" />
      ) : (
        <div id="Events">
          <h1 className="Event__page_title">Events</h1>
          <hr />
          <div className="Events_display">
            {Events.length === 0 ? (
                <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: '100%',
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
            ) : (
              Events.map((event, index) => (
                <div className="event" key={`Events${index}`} id={`Events${index}`}>
                  <hr />
                  <div className="events_date">
                    <h2 style={{ margin: "0px" }}>{eventDay(event)}</h2>
                    <h2>{eventMonth(event)}</h2>
                  </div>
                  {/* <hr className="events_hr" /> */}
                  <div className="events_details">
                    <h2>{event.eventName}</h2>
                    <div>{event.eventSmallDescription}</div>
                    <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" id={`Events${index}`}>
                      Register
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="Events_calender">
            <Calender events={Events} />
          </div>
        </div>
      )}
    </Layout>
  );
  
}

export default events;
