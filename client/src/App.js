import {BrowserRouter as Router} from 'react-router-dom'
import UIDesign from './components/UIDesign';

function App() {
  return (
    <div className="App">
      <Router>
        <UIDesign />
      </Router>
    </div>
  );
}

export default App;
