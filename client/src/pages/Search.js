import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import SearchForm from "../components/SearchForm";
import ResultCard from "../components/ResultCard";
import API from "../utils/API";
const INP_TITLE = "title";
const placeholderIMG =
  "https://via.placeholder.com/150/0000FF/808080%20?text=%22Book%20Cover%22";

const Search = () => {
  const [formObject, setFormObject] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    document.title = "Search Books";
  }, []);

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
          let { data } = res;
          // console.log(`TESTING\n${data}`);
          setResults(data.items);
        })
        .catch((err) => console.error(err));
    }
  }

  function saveResult(index) {
    console.log(`Save result: ${index}`);
    let { volumeInfo } = results[index];

    let saveBook = {
      title: volumeInfo.title,
      authors: volumeInfo.authors,
      description: volumeInfo.description,
      image: volumeInfo.imageLinks
        ? volumeInfo.imageLinks.smallThumbnail
        : placeholderIMG,
      link: volumeInfo.canonicalVolumeLink,
      categories: volumeInfo.categories,
      publishedDate: volumeInfo.publishedDate,
      pageCount: volumeInfo.pageCount,
      averageRating: volumeInfo.averageRating,
    };

    API.saveBook(saveBook)
      .then((res) => {
        let { data } = res;
        console.log("Success: " + data);
        let newResults = [...results];
        let newItem = { ...results[index] };
        newItem.disabled = "disabled";
        newResults[index] = newItem;
        setResults(newResults);
      })
      .catch((err) => console.error(err));
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
        {results.length ? (
          results.map((result, index) => {
            let { volumeInfo, disabled } = result;
            return (
              <ResultCard
                key={index}
                title={volumeInfo.title}
                authors={volumeInfo.authors ? volumeInfo.authors.join() : "N/A"}
                description={volumeInfo.description}
                image={
                  volumeInfo.imageLinks
                    ? volumeInfo.imageLinks.smallThumbnail
                    : placeholderIMG
                }
                link={volumeInfo.canonicalVolumeLink}
                rightBtnLabel={disabled ? "Saved!" : "Save"}
                rightBtnClick={() => saveResult(index)}
                disabled={disabled ? disabled : ""}
              ></ResultCard>
            );
          })
        ) : (
          <h3 className="text-muted text-center">No Results</h3>
        )}
      </Container>
    </div>
  );
};

export default Search;
