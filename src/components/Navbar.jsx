import { navItems } from "../data/portfolioData";

function Navbar({ isLight, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <a href="#home" className="brand">
          Zahid Jan
        </a>
        <nav>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="theme-btn" type="button" onClick={onToggleTheme}>
          {isLight ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
