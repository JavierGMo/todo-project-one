import logo from './logo.svg';
import './App.css';
import { GreenText } from './components/Texts/GreenText';

function App() {
  const objHola = {
    id: 1,
    body: "dajsdjkal"
  };
  return (
    <div className="App">
      <GreenText
        count={0}
        objHola={objHola}
      />
    </div>
  );
}

export default App;
