import React, { useState, useEffect, useReducer } from "react";

import "./App.css";

const INITIAL_STATE = {
  molecule: null,
  searchQuery: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_MOLECULE":
      return { ...state, molecule: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const setMolecule = (molecule) => ({
  type: "SET_MOLECULE",
  payload: molecule,
});

const setSearchQuery = (queryString) => ({
  type: "SET_SEARCH_QUERY",
  payload: queryString,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { molecule, searchQuery } = state;
  const [bioactivity, setBioactivity] = useState(null);
  const [lipinski, setLipinski] = useState(null);
  const [pubchem, setPubchem] = useState(null);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const fetchFunc = async () => {
        const response = await fetch(
          `http://localhost:5000/molecules/${searchQuery}`
        );
        const resJson = await response.json();
        if (resJson.success) dispatch(setMolecule(resJson));
        else dispatch(setMolecule(null));
      };

      fetchFunc();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (molecule?.bioactivity)
      setBioactivity(Object.entries(molecule?.bioactivity).slice(1));
    if (molecule?.lipinski)
      setLipinski(Object.entries(molecule?.lipinski).slice(1));
    if (molecule?.pubchem)
      setPubchem(Object.entries(molecule?.pubchem).slice(1));
  }, [molecule, searchQuery]);

  return (
    <>
      <h1>DRUG DATABASE</h1>
      <p className="heading"></p>
      <p className="text1">Enter your Query</p>
      <input
        type="search"
        value={searchQuery}
        placeholder="Type here..."
        id="input"
        onChange={(event) => dispatch(setSearchQuery(event.target.value))}
      />{" "}
      <img style={{ cursor: "pointer" }} src="magnifying-glass.png" width="23px" />
      {molecule ? (
        <div
          style={{
            padding: "100px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {bioactivity && (
            <div style={{ padding: "10px", textAlign: "center" }}>
              <h3 style={{ width: "100%" }}>Bioactivity Descriptor</h3>
              {bioactivity.map(([key, value]) => (
                <p>
                  {key}:{value}
                </p>
              ))}
            </div>
          )}

          {lipinski && (
            <div style={{ padding: "10px" }}>
              <h3 style={{ width: "100%" }}>Lipinski Descriptor</h3>
              {lipinski.map(([key, value]) => (
                <p>
                  {key}:{value}
                </p>
              ))}
            </div>
          )}
          {pubchem && (
            <div style={{ padding: "10px" }}>
              <h3 style={{ width: "100%" }}>Pubchem Descriptor</h3>
              {pubchem
                .filter((item, i) => i < 11)
                .map(([key, value]) => (
                  <p>
                    {key}:{value}
                  </p>
                ))}
            </div>
          )}
        </div>
      ) : (
        <p style={{ marginLeft: "9%" }}>No molecule found</p>
      )}
    </>
  );
};

export default App;
