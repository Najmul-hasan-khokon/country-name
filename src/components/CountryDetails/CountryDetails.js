import React from "react";

const CountryDetails = ({ addCountry }) => {
  // evabeo for loop diye o total population ber kora jay.
  //   let totalPopulation = 0;
  //   for (let i = 0; i < addCountry.length; i++) {
  //     const country = addCountry[i];
  //     totalPopulation = totalPopulation + country.population;
  //   }

  // evabeo total population add korte pari. reduce er first peramitery eta ekta callBack function
  // second peramiter e 0 ta hocce initial ba current value.
  const totalPopulation = addCountry.reduce(
    (sum, country) => sum + country.population,
    0
  );

  // css style.
  const textCenter = { textAlign: "center" };
  return (
    <div>
      <h2 style={textCenter}>This is Country : {addCountry.length}</h2>
      <p style={textCenter}>Total population : {totalPopulation}</p>
    </div>
  );
};

export default CountryDetails;
