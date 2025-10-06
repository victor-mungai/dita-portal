import "/src/Css/error.css";
import { Link } from "react-router-dom";
import dita_logo from "/public/ditaLogo-3d409f18.png";

function Error({ errorCode }) {
  let errorMessage = "Oops! Something went wrong.";

  if (errorCode === 404) {
    errorMessage = "404 - Page Not Found";
  } else if (errorCode === 500) {
    errorMessage = "500 - Server Error";
  }

  return (
    <div className="Error">
      <img src={dita_logo} />
      <h1 className="cssanimation effect3d">{errorMessage}</h1>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default Error;
