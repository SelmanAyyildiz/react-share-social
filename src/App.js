
import AuthContext from './context/AuthContext';
import RouterFunction from './Router/Router';

function App() {

  return (
    <div className="App">
      <AuthContext>
      <RouterFunction/>
      </AuthContext>
    </div>
  );
}

export default App;
