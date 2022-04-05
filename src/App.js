import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  return (
    <Authenticator>
      {({signOut, user}) => (
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello from V2</h1>
            <button onClick={signOut}>Sign Out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
