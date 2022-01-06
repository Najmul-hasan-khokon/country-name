import { useEffect, useState } from "react";
import Country from "./components/country/Country";
import CountryDetails from "./components/CountryDetails/CountryDetails";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [addCountry, setAddCountry] = useState([]); // button e click korar por eta kaj korbe.

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log(err));
  }, []);

  // event handler function
  const handleAddCountry = (country) => {
    // spread operator use kore ager value ta copy kore nibo tar por new value add korbo.
    // copy the previous and current country.
    const newCountry = [...addCountry, country];
    setAddCountry(newCountry);
  };

  // css style.
  const textCenter = { textAlign: "center" };

  return (
    <div>
      <h1 style={textCenter}>Country Loaded: {countries.length}</h1>
      <h1 style={textCenter}>Country Added: {addCountry.length}</h1>
      {/* add country pass as a props to another component */}
      <CountryDetails addCountry={addCountry} />
      {countries.map((country) => (
        <Country
          key={Math.random(country)}
          country={country}
          handleAddCountry={handleAddCountry}
        />
      ))}
    </div>
  );
};

export default App;
