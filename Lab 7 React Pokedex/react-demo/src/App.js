import logo from './logo.svg';
import './App.css';

function Pokemon(props) {
  return<div className= 'Pokemon'><h1> {props.name}</h1>
    <h2> Type: {props.type} </h2>
    <img src={props.image} alt={props.name}/> </div>;

}
function handler() {
  alert("You clicked me!");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
  <Pokemon name="Pikachu" type ='electric' image="pikachu.jpg"/>
  <Pokemon name= 'Bulbasaur' type='grass/poison' image="bulbasaur.jpg"/>
  <Pokemon name= 'dragonite' type='dragon/flying' image="dragonite.jpg"/>

      </header>
    </div>
  );
}

export default App;
