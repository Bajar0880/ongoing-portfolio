import { AboutMe } from './components/AboutMe';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ThemeToggle } from './components/ThemeToggle';

function App() {

  return (
    <>
      {/* <ThemeToggle /> Alternative */}
      

      <Header />

      <Hero />

      <div 
        className="mt-200 mb-200
        max-sm:mt-100
        max-md:mt-100
        max-lg:mt-100
        ">
        <AboutMe />
      </div> 
      
    </>
  )
}

export default App
