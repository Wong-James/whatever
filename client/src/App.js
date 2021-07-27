import React from 'react'
import {Router} from "@reach/router"
import HomePage from './components/HomePage';
import CreatePet from './components/CreatePet';
import DisplayPet from './components/DisplayPet';
import EditPet from './components/EditPet';



function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path="/api/pet/display" />
        <CreatePet path="/api/pet/create" />
        <DisplayPet path="/api/pet/:id" />
        <EditPet path="/api/pet/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
