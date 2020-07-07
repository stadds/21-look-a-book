import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SearchForm from "../components/SearchForm";
import ResultCard from "../components/ResultCard";
import API from "../utils/API";
const INP_TITLE = "title";

const Search = () => {
  const [formObject, setFormObject] = useState({});
  const [results, setResults] = useState([]);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject[INP_TITLE]) {
      console.log(formObject[INP_TITLE]);
      API.getSearch(formObject[INP_TITLE])
        .then((res) => {
          let {data} = res;
          // console.log(`TESTING\n${data}`);
          setResults(data.items)
        })
        .catch((err) => console.error(err));
    }
  }

  function saveResult(index) {
    console.log(`Save result: ${index}`);
    let test = JSON.stringify(results[index]);
    console.log(`results[index] = ${test}`)
  }

  return (
    <div>
      <Container
        margin="mb-4"
        padding="p-2"
        border="border rounded-sm"
        other="shadow-sm"
      >
        <Heading level={2} hasHR>
          Book Search
        </Heading>
        <SearchForm
          label="Search for a book:"
          name={INP_TITLE}
          placeholder="Harry Potter"
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        ></SearchForm>
      </Container>
      <Container>
        <Heading level="2" hasHR={true}>
          Results
        </Heading>
        {results.map((result, index) => {
          let { volumeInfo } = result;
          return (
            <ResultCard
              key={index}
              title={volumeInfo.title}
              authors={volumeInfo.authors.join()}
              description={volumeInfo.description}
              image={volumeInfo.imageLinks.smallThumbnail}
              link={volumeInfo.canonicalVolumeLink}
              rightBtnLabel="Save"
              rightBtnClick={() => saveResult(index)}
              // disabled={}
            ></ResultCard>
          );
        })}
      </Container>
    </div>
  );
};

export default Search;
