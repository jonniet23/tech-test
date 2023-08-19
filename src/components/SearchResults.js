import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results) {
    return <p>No results</p>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img
            className="card-image"
            key={image}
            src={image}
            alt="spaceImage"
          />
        ))}
      </>
    );
  }
};
export default SearchResults;
