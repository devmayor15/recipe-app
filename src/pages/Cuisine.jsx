import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() =>{
    getCuisine(params.type);
  }, [params.type])

  const getCuisine = async (name) => {
  const data = await fetch(` https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
  const recipes = await data.json();
  setCuisine(recipes.results);
  
  }

  return (
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Link to={'/recipe/' + item.id}>
            <Card  key={item.id}>
            <img src={item.image} alt={item.image} />
            <h4>{item.title}</h4>
            </Card>
          </Link>
          
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
    line-height: 1.5rem;
  }
`

export default Cuisine