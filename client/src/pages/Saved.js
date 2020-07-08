import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import ResultCard from "../components/ResultCard";
import API from "../utils/API";

const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    document.title = "Saved Books";
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.error(err));
  }

  function deleteBook(id) {
    console.log(id);
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.error(err));
  }

  return (
    <Container>
      <Heading level="2" hasHR={true}>
        Saved Books!
      </Heading>
      {books.length ? (
        books.map((book) => {
          return (
            <ResultCard
              key={book._id}
              title={book.title}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              rightBtnLabel="Delete"
              rightBtnClick={() => deleteBook(book._id)}
            ></ResultCard>
          );
        })
      ) : (
        <h3 className="text-muted text-center">No Results</h3>
      )}
    </Container>
  );
};

export default Saved;
