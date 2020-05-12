import React from 'react';

import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import style from './Cards.module.css';

const Cards = ({ input }) => {
  let parsedInt = parseInt(input.recipe.calories);
  const temp = input.recipe.ingredients;
  const ingredientCount = temp.length;
  let rando = Math.floor((Math.random() * 10000) + 1);
  return (
    <div className={style.cardControl}>
    <Grid item component={Card}>
      <CardContent>
        <Typography variant="h5">
          {input.recipe.label}
        </Typography>
        
        <img className={style.foodPic} src={input.recipe.image} alt={input.recipe.label} />

        <Typography color="textSecondary" gutterBottom>
          Calories: <CountUp start={0} end={parsedInt} duration={2} separator=","/>
        </Typography>
        {input.recipe.dietLabels.map(dietLabel => (
          <div className={style.tag} key={rando}>{dietLabel}</div>
        ))}
        {input.recipe.healthLabels.map(healthLabel => (
          <div className={style.tag} key={Math.floor((Math.random() * 10000) + 1)}>{healthLabel}</div>
        ))}
        <Typography color="textSecondary" gutterBottom>
          Ingredients: {ingredientCount}
          </Typography>

        {input.recipe.ingredients.map(ingredient => ( 
          <div className={style.ingredientTag} key={Math.floor((Math.random() * 10000) + 1)}>{ingredient.text}</div>
        )) }
        <div className={style.verticalBuffer}>
        <Typography variant="h6" >
          <a  className={style.sourceLink} 
          href={input.recipe.url} target="_blank" rel="noopener noreferrer">
            Instructions</a> 
        </Typography>
        </div>
      </CardContent>
    </Grid>
    </div>
  );
}

export default Cards;
