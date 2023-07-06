import HomePage from "./pages/home"
import About from "./pages/About"
import Register from "./pages/Register"
import Donate from "./pages/Donate"
import '@fortawesome/fontawesome-free/css/all.min.css';

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
    </div>
  )
}

export default App
