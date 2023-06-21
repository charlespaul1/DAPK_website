import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Donate from './pages/Donate';

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={HomePage}/>
                <Route path="/about" exact component={About}/>
                <Route path="/contact" exact component={Contact}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/donate" exact component={Donate}/>
            </Routes>
        </Router>
    )
}

export default PageRoutes