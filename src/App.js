
//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/movie.hoc";

//pages
import HomePage from "./pages/home.pages";
import movie from "./pages/movie.page"

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage}/>
      <MovieHOC path="/movie/:id" exact component={movie}/>
    </>//fragments
  );
}//  / , /movie

export default App;


//SPRED OPERATOR

//it is used to add object to another object and add extra parameter
//const student={...abhay,goodstudent:true} here abhay is other object and we add extra parameter that is goodstudent