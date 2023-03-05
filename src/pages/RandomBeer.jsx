import axios from "axios";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setRandomBeer(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="random-beer-container">
      {randomBeer ? (
        <div className="beer-details">
          <img src={randomBeer.image_url} alt="random-beer" width="70px" />
          <h3>{randomBeer.name}</h3>
          <p className="gray-container">{randomBeer.tagline}</p>
          <b>{randomBeer.first_brewed}</b>
          <p className="gray-container">Attenuation level: {randomBeer.attenuation_level}</p>
          <p className="description-container">{randomBeer.description}</p>
          <p className="gray-container">Contributed by: {randomBeer.contributed_by}</p>
        </div>
      ) : (
        <p className="loader">
          <MoonLoader />
        </p>
      )}
    </div>
  );
}

export default RandomBeer;
