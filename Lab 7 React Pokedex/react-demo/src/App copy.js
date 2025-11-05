import logo from './logo.svg';
import './App.css';

function MyButton(props) {
  return <button class="button" onClick={handler}>{props.text}</button>;
}
function handler() {
  alert("You clicked me!");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hadleigh <br />
        <MyButton text= "Hadleigh's Button" /> <br />
        <MyButton text= "Another Button" /> <br />
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
