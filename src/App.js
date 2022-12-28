import Header from "./components/header";
import Dish, * as D  from "./components/dish";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dish></Dish>
      <D.Flag></D.Flag>
    </div>
  );
}

export default App;
