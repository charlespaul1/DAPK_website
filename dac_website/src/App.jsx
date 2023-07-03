import HomePage from "./pages/home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Donate from "./pages/Donate"


function App() {


  return (
    <div className="app">
      <section id="home">
        <HomePage />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="register">
        <Register />
      </section>
      <section id="donate">
        <Donate />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
      
      
    </div>
  )
}

export default App
