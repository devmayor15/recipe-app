import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';


const Veggie = () => {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
      getVeggie();
  }, [])
  const getVeggie = async () =>{
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
      const data = await api.json();
      setVeggie(data.recipes);
  }
  return (
    <div>
      <Wrapper>
          <h3>Vegetarian Picks</h3>
          <Splide 
              options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: 'free',
                  gap: '5rem',
              }}
          >
              {veggie.map((recipe) => {
              return (
                  <SplideSlide key={recipe.id}>
                      <Card>
                        <Link to={'/recipe' + recipe.id}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title}/>
                            <Gradient />
                        </Link>
                          
                      </Card>
                  </SplideSlide>
              );
              })}
          </Splide>
      </Wrapper>
  </div>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`;
const Card = styled.div`
    min-height: 25rem;
    overflow: hidden;
    border-radius: 2rem;
    position: relative;

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height:; 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        left: 50%;
        bottom: 0%;
        z-index: 10;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-weight: 600;
        height: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`;

export default Veggie