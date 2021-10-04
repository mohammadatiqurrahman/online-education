import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
          <Header></Header>
          <Courses></Courses>
          </Route>
          <Route exact path="/home">
          <Header></Header>
          <Courses></Courses>
          </Route>
          <Route path="/services">
          <Services></Services>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
