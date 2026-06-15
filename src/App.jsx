import {NavBar} from './layout/NavBar.jsx';
import {Footer} from './layout/Footer';
import {Home} from './sections/Home.jsx';
import {About} from './sections/About.jsx';
import {Contact} from './sections/Contact.jsx';

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
      <Home/>
      <About/>
      <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
