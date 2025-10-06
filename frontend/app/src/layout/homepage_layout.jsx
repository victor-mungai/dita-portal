import Header from "/src/header/homepage_header.jsx";
import HeaderMobile from "/src/header/other_pages.jsx";

function homepage_layout({ children }) {
  const mobileView = window.visualViewport.width < 768;
  if (mobileView) {
    return (
      <>
        <HeaderMobile></HeaderMobile>
        <div>{children}</div>
      </>
    );
  }
  return (
    <>
      <Header></Header>
      <div>{children}</div>
    </>
  );
}

export default homepage_layout;
