import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
import TopContributors from '../components/TopContributors';
import UpcomingFoodFest from '../components/UpcomingFoodFest';

const Home = () => {
    return (
        <div>
            <Banner />
            <RecipeGrid />
            <TopContributors />
            <UpcomingFoodFest />
        </div>
    );
};

export default Home;