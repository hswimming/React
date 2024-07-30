import logo from './logo.svg';
import './App.css';
import loadsh from "lodash";

function App() {
  var scores = [1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 1, 1, 2, 2, 2];
  var result = loadsh.uniqBy(scores); // 중복된것 뽑기
  console.log(result);

  // JSX (HTML과 100% 일치하는 건 아님)
  // 반드시 전체가 하나의 덩어리로 되어야 함
  return (
    <div className="App">
      <header className="App-header">
        <h1>App 컨포넌트이다.</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
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

export default App; // element => 태그로 사용 가능