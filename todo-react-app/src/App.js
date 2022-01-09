import './index.css';
import { useUserContext } from './context/userContext';
import Auth from "./components/auth";
import Dashboard from "./components/dashboard";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";


function App() {

  const { user, loading, error  } = useUserContext();

  return (
    <div className="App">
      { error && <p className='error'> { error } </p> }
      { loading ? 
      <div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
      </div> : <> { user ? <Dashboard /> : <Auth />  } </>}
    </div>
  );
}

export default App;
