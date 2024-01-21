import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import FileUpload from './components/FileUpload';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div className="container" style={{width: "600px"}}>
      <div className="my-3">
        <h3>Adhitya</h3>
        <h4>React Hooks File Upload</h4>
      </div>

      <FileUpload />
    </div>
  );
}

export default App;