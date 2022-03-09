import './App.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Row from './components/Row';
import Requests from './data/Requests';

function App() {
  return (
    <div className="App">
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
        {/* quick view */}

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
