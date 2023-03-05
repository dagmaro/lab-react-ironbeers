import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewerTips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleName = (event) => {
    const valueOfInput = event.target.value;
    const upperCasedName =
      valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1);
    setName(upperCasedName);
  };

  const handleTagline = (event) => {
    const valueOfInput = event.target.value;
    const upperCasedTagline =
      valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1);
    setTagline(upperCasedTagline);
  };

  const handleDescription = (event) => {
    const valueOfInput = event.target.value;
    const upperCasedDescription =
      valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1);
    setDescription(upperCasedDescription);
  };

  const handleFirstBrewed = (event) => {
    const valueOfInput = event.target.value;
    const upperCasedFirstBrewed =
      valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1);
    setFirstBrewed(upperCasedFirstBrewed);
  };

  const handleBrewerTips = (event) => {
    const valueOfInput = event.target.value;
    const upperCasedBrewerTips =
      valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1);
    setBrewerTips(upperCasedBrewerTips);
  };

  const handleAttenuationLevel = (event) => {
    if (event.target.value < 0) {
      return;
    }
    setAttenuationLevel(event.target.value);
  };

  const handleContributedBy = (event) => {
    const valueOfInput = event.target.value;
    const upperCasedContribution =
      valueOfInput.charAt(0).toUpperCase() + valueOfInput.slice(1);
    setContributedBy(upperCasedContribution);
  };

  const handleSubmitform = async (event) => {
    event.preventDefault();
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    try {
      await axios.post(
        "https://ih-beers-api2.herokuapp.com/beers/new",
        newBeer
      );
      navigate("/beers");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="form-container">
        <label htmlFor="name">Name </label>
        <input
          type="text"
          placeholder="Your amazing beer!"
          name="name"
          value={name}
          onChange={handleName}
        />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input
          type="text"
          placeholder="Don't get too drunk my fella!"
          name="tagline"
          value={tagline}
          onChange={handleTagline}
        />
        <br />
        <label htmlFor="description">Description </label>
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleDescription}
        />
        <br />
        <label htmlFor="first_brewed">First Brewed </label>
        <input
          type="text"
          placeholder="IDK"
          name="first_brewed"
          value={first_brewed}
          onChange={handleFirstBrewed}
        />
        <br />
        <label htmlFor="brewers_tips">Brewer tips </label>
        <input
          type="text"
          placeholder="Tippy tippss!"
          name="brewers_tips"
          value={brewers_tips}
          onChange={handleBrewerTips}
        />
        <br />
        <label htmlFor="attenuation_level">Attenuation Level </label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={handleAttenuationLevel}
        />
        <br />
        <label htmlFor="contributed_by">Contributed by </label>
        <input
          type="text"
          placeholder="WHOOOOO!?"
          name="contributed_by"
          value={contributed_by}
          onChange={handleContributedBy}
        />
        <br />
        <button onClick={handleSubmitform}>Add</button>
      </form>
    </div>
  );
}

export default NewBeer;
