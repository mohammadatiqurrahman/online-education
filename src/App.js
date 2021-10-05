import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Instructors from './components/Instructors/Instructors';
import NavBar from './components/Navbar/NavBar';
import NotFound from './components/NotFound/NotFound';
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
          <Footer></Footer>
          </Route>
          <Route exact path="/home">
          <Header></Header>
          <Courses></Courses>
          <Footer></Footer>
          </Route>
          <Route path="/services">
          <Services></Services>
          <Footer></Footer>
          </Route>
          <Route path="/about_us">
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
