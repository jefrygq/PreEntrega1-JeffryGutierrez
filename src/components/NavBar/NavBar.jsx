// import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";
import SearchWidget from "../SearchWidget/SearchWidget";
import Sections from "../Sections/Sections";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">MyTech.com</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Sections />
          </ul>
          <SearchWidget />
          <CartWidget qty={5} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
