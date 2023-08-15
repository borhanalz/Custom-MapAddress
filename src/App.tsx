import React from 'react';
import MainProvider from './Core/Providers/MainProvider';
import MainRoutes from "./Core/MainRoute/MainRoutes";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">

        <MainProvider>
            <MainRoutes/>
        </MainProvider>
    </div>
  );
}

export default App;

