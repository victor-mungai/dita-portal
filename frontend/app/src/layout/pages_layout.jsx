import Header from "/src/header/other_pages.jsx";

function otherpage_layout({ children }) {
  return (
    <>
      <Header></Header>
      <div>{children}</div>
    </>
  );
}

export default otherpage_layout;
