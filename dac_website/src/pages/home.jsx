import Logo from '../assets/logo.jpg'
import Header from '../components/header'
import './home.css'
const HomePage = () => {
  return (
    <>
    <Header/>
    <div className="home">
    <div className="hero-image"></div>
    <div className="content">
      <div className='top-home'>
      <img src={Logo} alt='logo' className='logo' 
      />
      <h1>DEMOCRATIC ACTION COALITION PARTY</h1>
      </div>
      <div className='bottom-home'>
      <h3>The New Dawn has come!!!!</h3>
      <section>
        <p>Join the revolution in making a difference.</p>
        <a href='#register'>
          <button>Register</button>
        </a>
      </section>
      </div>
     </div>
    </div>
    
    </>
  );
};

export default HomePage;
