import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from './components/ListItem';
import { GlobalProvider } from './context/GlobalContext';
import EditItem from './pages/items/EditItem';
import CreateItem from './pages/items/CreateItem';


function App(props) {
  return (
    <div className="App">
      <GlobalProvider>
        <header className="App-header">
          <ListItem />
          <div className="vl"></div>
          {(props.match.params.id) ? (
            <EditItem props={props} />
          ) : (
            <CreateItem />
          )}
        </header>
      </GlobalProvider>
    </div>
  );
}

export default App;
