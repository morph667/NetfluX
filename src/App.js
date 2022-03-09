import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Row from './components/Row';
import Video from './components/Video';
import Requests from './data/Requests';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'>
            {/* navbar */}
            <Nav />

            {/* banner */}
            <Banner />

            {/* rows */}
            <Row 
              title="Programmes originaux Netflix"
              fetchUrl={Requests.fetchNetflixOriginals}
            />
            <Row 
              title="Tendance actuelles"
              fetchUrl={Requests.fetchTrending}
              isPoster={true}
            />
            <Row 
              title="Les mieux notés"
              fetchUrl={Requests.fetchTopRated}
            />
            <Row 
              title="Films d'action"
              fetchUrl={Requests.fetchActionMovies}
            />

            {/* video */}
            <div className="test"></div>

            {/* Footer */}
            <Footer />
          </Route>
          <Route path='/video/:id' component={Video} />
          <Route path="*">
            <Navigate to="/"/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
