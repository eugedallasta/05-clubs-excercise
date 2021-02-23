import '../styles/App.css';
import clubs from '../data/data.json';
import ClubList from './ClubList';

function App() {
  
  return (
    <div className="App">
      
      <ClubList clubs={clubs}/>
      
    </div >
     
  );
}

export default App;
