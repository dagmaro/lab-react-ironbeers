import axios from "axios";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import BarLoader from "react-spinners/BarLoader";

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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading === true) {
    return (
      <div className="loader">
        <MoonLoader/>
      </div>
    );
  }
  return (
    <div>
      {allBeersList.map((eachBeer) => {
        return (
          <div key={eachBeer._id}>
            <img src={eachBeer.image_url} alt="beer-image" width="50px" />
            <h3>{eachBeer.name}</h3>
            <p>{eachBeer.tagline}</p>
            <p>
              {" "}
              <b>{eachBeer.contributed_by}</b>{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default BeerLink;
