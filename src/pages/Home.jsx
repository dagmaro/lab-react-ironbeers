import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav className="home-page-links">
        <div id="beer-link">
          <NavLink to="/beers">
            <div className="beer-container">
              <h3>All beers</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas necessitatibus unde suscipit assumenda sunt asperiores
                eligendi nam.
              </p>
            </div>
          </NavLink>
        </div>
        <br />
        <div id="random-beer-link">
          <NavLink to="/random-beer">
            <div className="random-beer-container">
              <h3>Random Beer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas necessitatibus unde suscipit assumenda sunt asperiores
                eligendi nam.
              </p>
            </div>
          </NavLink>
        </div>
        <br />
        <div id="new-beer-link">
          <NavLink to="/new-beer">
            <div className="new-beer-container">
              <h3>New Beer</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas necessitatibus unde suscipit assumenda sunt asperiores
                eligendi nam.
              </p>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Home;
