import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { shortList, longList, list } from './data';
import { useEffect } from 'react';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    if (currentPerson == 0) {
      setCurrentPerson(people.length - 1);
    } else {
      setCurrentPerson(currentPerson - 1);
    }
  };
  const nextSlide = () => {
    if (currentPerson == people.length - 1) {
      setCurrentPerson(0);
    } else {
      setCurrentPerson(currentPerson + 1);
    }
  };

  useEffect(() => {
    let val = setInterval(() => {
      console.log('calling');
      nextSlide();
    }, 2000);
    return () => {
      console.log('cleaning up');
      clearInterval(val);
    };
  }, [currentPerson]);
  return (
    <section className='slider-container'>
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className='slide'
            style={{
              transform: `translateX(${100 * (index - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt='' className='person-img' />
            <h5 className='name'>{name}</h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon'></FaQuoteRight>
          </article>
        );
      })}
      <button className='prev' type='button' onClick={prevSlide}>
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button className='next' type='button' onClick={nextSlide}>
        <FiChevronRight></FiChevronRight>
      </button>
    </section>
  );
};

export default Carousel;
