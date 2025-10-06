import "/src/Css/pages_header.css";
import dita_logo from "/public/ditaLogo-3d409f18.png";
import menu from "/src/assets/menu.png";
import cancel from "/src/assets/cancel-50.png";
import { Link } from "react-router-dom";
import about_us_img from "/src/assets/about_icon.png";
import events_img from "/src/assets/events_icon.png";
import projects_img from "/src/assets/project_icon.png";
import members_img from "/src/assets/people_icon.png";
import achievements_img from "/src/assets/medal_icon.png";
import technical_writing_img from "/src/assets/writing_icon.png";
// import Links from

function other_pages() {
  return (
    <>
      <div id="header_other">
        <Link to="/">
          <img
            src={dita_logo}
            width={100}
            className="dita_logo"
            style={{ marginLeft: "-60px" }}
          />
        </Link>
        <button
          className="menu_btn"
          onClick={() => {
            // document.querySelector(".menu_div").style.display = "flex"

            if (document.querySelector(".menu_div").style.display === "none") {
              document.querySelector(".menu_div").style.display = "flex";
              document.querySelector(".menu_btn").style.display = "none";
            } else {
              document.querySelector(".menu_div").style.display = "none";
              document.querySelector(".menu_img").src = menu;
            }
          }}
        >
          <img src={menu} className="menu_img" />
        </button>
      </div>

      <div className="menu_div" id="menu">
        <button
          className="cancel_button"
          onClick={() => {
            document.querySelector(".menu_div").style.display = "none";
            document.querySelector(".menu_btn").style.display = "flex";
          }}
        >
          <img src={cancel} className="cancel_img" />
        </button>
        <Link to="/about">
          About us <img src={about_us_img} width={20} />
        </Link>
        <Link to="/events">
          Events <img src={events_img} width={20} />
        </Link>
        <Link to="/projects">
          Projects <img src={projects_img} width={20} />
        </Link>
        <Link to="/members">
          Members <img src={members_img} width={20} />
        </Link>
        <Link to="/Achievements">
          Achievements <img src={achievements_img} width={20} />
        </Link>
        <Link to="/technicalWriting">
          Technical Writing <img src={technical_writing_img} width={20} />
        </Link>
      </div>
    </>
  );
}

export default other_pages;
