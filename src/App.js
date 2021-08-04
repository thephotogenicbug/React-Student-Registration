import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <input type="file" name="image" accept="image/*" multiple={false}  />
    </div>
  );
}

export default App;
