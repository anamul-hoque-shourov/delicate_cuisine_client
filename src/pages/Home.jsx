import React from 'react';
import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
import { useLoaderData } from 'react-router';

const Home = () => {
    const recipes = useLoaderData();
    return (
        <div>
            <Banner />
            <RecipeGrid recipes={recipes} />
        </div>
    );
};

export default Home;