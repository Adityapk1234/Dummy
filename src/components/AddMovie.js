import React, { Fragment, useRef, useState } from "react";

import classes from "./AddMovie.module.css";
import Modal from "./UI/Modal";

function AddMovie(props) {
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");
  const [abc, setAbc] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);
    setAbc(true);
  }

  const movieContentModal = (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="date" id="date" ref={releaseDateRef} />
      </div>

      <button>Add Movie</button>
    </form>
  );

  return (
    <Fragment>
      {!abc && movieContentModal}
      {abc && (
        <Modal onClose={() => setAbc(false)}>
          <p>Successfully sent</p>
          <button onClick={() => setAbc(false)}>Close</button>
        </Modal>
      )}
    </Fragment>
  );
}

export default AddMovie;
