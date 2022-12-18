import './App.css';

import Routes from './routes';
import ItemProvider from './Context/Items';

function App() {
  return (
    <div className='App'>
      <ItemProvider>
        <Routes />
      </ItemProvider>
    </div>

  );
}

export default App;
