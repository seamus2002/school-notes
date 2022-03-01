import './App.css';
import Heading from './components/Heading';
import HandwrittenNotes from './components/HandwrittenNotes';
import FlashCards from './components/FlashCards';

function App() {
  return (
    <div className="App">

      <Heading />
      
      <HandwrittenNotes />

      <FlashCards />

    </div>
  );
}

export default App;
