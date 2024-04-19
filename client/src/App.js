import {BrowserRouter as Router} from 'react-router-dom'
import UIDesign from './components/UIDesign';
import AllRoutes from './AllRoutes';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllBooks } from './actions/postBok';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllBooks())
  }, [dispatch])
  
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
