import './App.css';
import { useUserContext } from './context/userContext';
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";


function App() {

  const { user, loading, error  } = useUserContext();

  return (
    <div className="App">
      { error && <p className='error'> { error } </p> }
      { loading ? <h2> Loading.. </h2> : <> { user ? <Dashboard /> : <Auth />  } </>}
    </div>
  );
}

export default App;
