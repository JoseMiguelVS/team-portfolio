import {NavBar} from './layout/NavBar.jsx';
import {Footer} from './layout/Footer';
import {Home} from './sections/Home.jsx';
import {About} from './sections/About.jsx';
<<<<<<< HEAD
import {Contact} from './sections/Contact.jsx';
=======
import { Projects } from './sections/Projects';
>>>>>>> 87ab1cca7ea38705e449134a658d91d91ce81e36

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
      <Home/>
      <About/>
<<<<<<< HEAD
      <Contact/>
=======
      <Projects/>
>>>>>>> 87ab1cca7ea38705e449134a658d91d91ce81e36
      </main>
      <Footer/>
    </div>
  )
}

export default App
