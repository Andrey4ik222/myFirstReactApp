import "./Header.css";
import ButtonSearch from "../ButtonSearch/ButtonSearch";

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Все про JavaScript</h1>
      <div className="header-search-wrapper">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Пошук по сайту"
        />
        <ButtonSearch />
      </div>
    </header>
  );
}
export default Header;
