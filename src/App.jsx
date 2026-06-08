import {NavBar} from './layout/NavBar.jsx';
import {Footer} from './layout/Footer';
import {Home} from './sections/Home.jsx'
import {Delete} from './sections/DeleteThis.jsx'

function App() {

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar/>
      <main>
      <Home/>
      <Delete/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
