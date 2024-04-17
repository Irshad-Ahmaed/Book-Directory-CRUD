import {BrowserRouter as Router} from 'react-router-dom'
import UIDesign from './components/UIDesign';
import AllRoutes from './AllRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <UIDesign />
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
