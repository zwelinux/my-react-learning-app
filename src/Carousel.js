import { useState } from 'react';
import { artistList } from './artists.js';
import './Carousel.css'

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < artistList.length - 1;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handlePreviousClick() {
    if (index >= 1) {
        setIndex(index - 1);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let artists = artistList[index];
  return (
    <>

        <div className='tutorial'>
        <h3>Tutorial Includes</h3>
        <ul>
            <li>Array Indexing </li>
            <li>Using Hooks in React</li>
            <li>State Management</li>
            <li>Reusing Component</li>
        </ul>
        </div>


      <button onClick={handleNextClick}>
        Next
      </button>
    
    { index && index >= 1 ?        <button onClick={handlePreviousClick}>
        Previous
      </button> : ''}

      
      <h4>
        <i>{artists.name} </i>
        by {artists.artist}
      </h4>
      <h3>
        ({index + 1} of {artistList.length})
      </h3>

      <img
        src={artists.url}
        alt={artists.alt}
        width={300}
        height="auto"
      />

      <br />
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} Lyrics
      </button>
      {showMore && <p>{artists.description}</p>}

    </>
  );
}
