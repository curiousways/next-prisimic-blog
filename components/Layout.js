import Nav from "./Nav";

const Layout = ({ children }) => (
  <div>
    <div className="max-w-5xl py-10 mx-auto">
      {" "}
      <Nav />
      {children}
    </div>
  </div>
);

export default Layout;
