import { Route } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import About from './components/About';
import CityDetail from './components/CityDetail';
import './App.css';
import { useSelector } from 'react-redux';

function App() {

  const cities = useSelector(state => state.cities)

  return (
    <div className="App">
      <Route exact path={"/"} component={Landing} />
      <Route exact path={"/home"} component={Home} />
      <Route exact path={"/about"} component={About} />
      {/* <Route path={"/detail/:id"} component={CityDetail} /> */}
      <Route path={"/detail/:id"} render={({match}) => (
        <CityDetail
          city={cities.filter(
            (city) => city.id === parseInt(match.params.id)
          )}/>
      )}
      />
    </div>
  );
}

export default App;