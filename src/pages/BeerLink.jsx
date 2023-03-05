import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MoonLoader } from "react-spinners";

function BeerLink() {
  const [allBeersList, setAllBeersList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      setAllBeersList(response.data);
      setIsLoading(false);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading === true) {
    return (
      <div className="loader">
        <MoonLoader />
      </div>
    );
  }
  return (
    <div className="all-beers-container">
      {allBeersList.map((eachBeer) => {
        return (
          <div className="all-beers-item" key={eachBeer._id}>
            <NavLink to={`/beer-details/${eachBeer._id}`}>
              <img src={eachBeer.image_url} alt="beer-image" width="60px" />
            </NavLink>
            
            <div className="info-beer">
              <h3>{eachBeer.name}</h3>
              <p>{eachBeer.tagline}</p>
              <p>
                Created by: <b>{eachBeer.contributed_by}</b>
              </p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default BeerLink;
