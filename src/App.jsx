import {NavBar} from './layout/NavBar.jsx';
import {Footer} from './layout/Footer';
import {Home} from './sections/Home.jsx';
import {About} from './sections/About.jsx';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
