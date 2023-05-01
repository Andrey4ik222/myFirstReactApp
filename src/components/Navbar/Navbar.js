import articles from "../../data/articles.json";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {articles.map((item) => (
          <li className="navbar-item">
            <a className="navbar-link" href=".">
              {item.shortTitle}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
