import {NavBar} from './layout/NavBar.jsx';
import {Footer} from './layout/Footer';
import {Home} from './sections/Home.jsx'

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
      <Home/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
