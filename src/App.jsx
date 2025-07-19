
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import FooterApp from './Components/FooterApp'
import Contact from './Components/Contact'
import Certificates from './Components/Certificates'
import Exp from './Components/Exp'


const App = () => {
  return (
    <div>
     <Navbar/>
     <Profile/>
     <Skills/>
     <Certificates/>
     <Exp/>
     <Projects/>
     
     <Contact/>
     <FooterApp/>     
     
     

    </div>
  )
}

export default App