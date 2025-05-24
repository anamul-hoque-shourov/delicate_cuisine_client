import Banner from '../components/Banner';
import RecipeGrid from '../components/RecipeGrid';
import TopContributors from '../components/TopContributors';

const Home = () => {
    return (
        <div>
            <Banner />
            <RecipeGrid />
            <TopContributors />
        </div>
    );
};

export default Home;