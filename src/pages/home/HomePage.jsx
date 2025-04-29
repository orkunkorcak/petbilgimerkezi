import Navigation from "../../components/navigation/Navigation"
import Hero from "../../components/hero/Hero" 
import PopularTopics from "../../components/popularTopics/PopularTopics";

const HomePage = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <PopularTopics />

      </main>
      
    </>
  );
}
export default HomePage;