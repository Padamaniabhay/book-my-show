import { Route } from "react-router-dom";

//axios --------------for renduring global data from tmdb
import axios from "axios";


//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/movie.hoc";

//pages
import HomePage from "./pages/home.pages";
import movie from "./pages/movie.page";
import Plays from "./pages/plays.page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};                                          //say params is empty  (by default it is filled)
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY; 



function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={movie}/>
      <DefaultHOC path="/plays" exact component={Plays}/>
    </>//fragments
  );
}//  / , /movie

export default App;


//SPRED OPERATOR

//it is used to add object to another object and add extra parameter
//const student={...abhay,goodstudent:true} here abhay is other object and we add extra parameter that is goodstudent