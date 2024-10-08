import './App.css';
import StringForm from "./StringForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Enter String and delimiter and click calculate to calculate sum of string.
        </p>
      </header>
      <div >
        <StringForm />
      </div>
    </div>
  );
}

export default App;
