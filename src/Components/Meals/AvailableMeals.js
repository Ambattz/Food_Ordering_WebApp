import React from 'react';
import DUMMY_MEALS from '../../Assets/Data';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MeaIItem/MealItem';

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals;
