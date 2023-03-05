import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

function BeerDetails() {
  const params = useParams();
  const { id } = params;
  const [beerDetails, setBeerDetails] = useState("");

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${id}`
      );
      setBeerDetails(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {beerDetails ? (
        <div className="beer-details">
          <img src={beerDetails.image_url} alt="beer-image" width="70px" />
          <h3>{beerDetails.name}</h3>
          <p className="gray-container">{beerDetails.tagline}</p>
          <b className="b-container">{beerDetails.first_brewed}</b>
          <p className="gray-container attenuation-container">{beerDetails.attenuation_level}</p>
          <p className="description-container">{beerDetails.description}</p>
          <p className="gray-container">{beerDetails.contributed_by}</p>
        </div>
      ) : (
        <p className="loader">
          <MoonLoader />
        </p>
      )}
    </div>
  );
}

export default BeerDetails;
