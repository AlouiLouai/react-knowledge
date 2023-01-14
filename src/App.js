import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './components/ListItem';
import { GlobalProvider } from './context/GlobalContext';
import CreateOrUpdate from './pages/items/CreateOrUpdate';


function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <header className="App-header">
          <ListItem />
          <div className="vl"></div>
         <CreateOrUpdate />
        </header>
      </GlobalProvider>
    </div>
  );
}

export default App;
