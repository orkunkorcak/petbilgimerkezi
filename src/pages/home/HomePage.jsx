import Navigation from "../../components/navigation/Navigation"
import Hero from "../../components/hero/Hero" 
import PopularTopics from "../../components/popularTopics/PopularTopics";
import OtherTopics from "../../components/otherTopics/OtherTopics";

const HomePage = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <PopularTopics />
        <OtherTopics />

      </main>
      
    </>
  );
}
export default HomePage;