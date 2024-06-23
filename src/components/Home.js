import Content from './Content';
import Programmers from './Programmers';
import HeroSection from './HeroSection';
function Home() {
  return (
    <div className="App">
      <HeroSection />
      <Content />
      <Programmers />
    </div>
  );
}

export default Home;
