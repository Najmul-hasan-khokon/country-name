import React from "react";

const Country = ({ country, handleAddCountry }) => {
  const { name, region, flags } = country;

  const countryStyle = {
    boxShadow: "5px 5px 10px grey",
    width: "420px",
    padding: "20px 0",
    textAlign: "center",
    margin: "auto",
  };

  return (
    <div>
      <div style={countryStyle}>
        <h3>Country : {name.common}</h3>
        <img style={{ height: "70px" }} src={flags.svg} alt="" />
        <p>
          <small>Area: {country.area}</small>
        </p>
        <p>Population: {country.population}</p>

        <p>
          <small>Region : {region}</small>
        </p>
        <button onClick={() => handleAddCountry(country)}>Add Country</button>
      </div>
    </div>
  );
};

export default Country;
