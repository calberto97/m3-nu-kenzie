import "./style.css";

export const Main = ({ children }) => {
  return (
    <div className="container">
      <header>
        <div className="header-content">
        {children[0]}
        {children[1]}
        </div>
        <main className="container">
          {children[2]}
          {children[3]}
        </main>
      </header>
    </div>
  );
};
