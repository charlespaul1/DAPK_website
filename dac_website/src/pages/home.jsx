import Logo from '../assets/logo.jpg'
import Header from '../components/header'
import './home.css'
const HomePage = () => {
  return (
    <>
    <Header/>
    <div className="home">
    <div className="hero-image"></div>
      <div className='top-home'>
      <img src={Logo} alt='logo' className='logo' 
      // style={{width: '300px', height: '300px', borderRadius: '50%'}}
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
    
    </>
  );
};

export default HomePage;
