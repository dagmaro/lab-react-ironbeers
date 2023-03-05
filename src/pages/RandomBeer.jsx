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
      //   console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {randomBeer ? (
        <div>
          <img src={randomBeer.image_url} alt="random-beer" width="70px" />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <b>{randomBeer.first_brewed}</b>
          <p>{randomBeer.attenuation_level}</p>
          <p>{randomBeer.description}</p>
          <p>{randomBeer.contributed_by}</p>
        </div>
      ) : (
        <p>
          <MoonLoader />
        </p>
      )}
    </div>
  );
}

export default RandomBeer;
