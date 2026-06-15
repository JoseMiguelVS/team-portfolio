import {NavBar} from './layout/NavBar.jsx';
import {Footer} from './layout/Footer';
import {Home} from './sections/Home.jsx';
import {About} from './sections/About.jsx';
import { Projects } from './sections/Projects';

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
      <Home/>
      <About/>
      <Projects/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
