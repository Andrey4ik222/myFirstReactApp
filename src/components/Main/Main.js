import articles from "../../data/articles.json";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      {articles.map((item) => (
        <div className="atricle">
          <h2 className="atricle-title">{item.title}</h2>
          <p className="atricle-description">{item.description}</p>
        </div>
      ))}
    </main>
  );
}
export default Main;
