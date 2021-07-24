
import Navbar from './components/navbar/Navbar';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';

function App() {

  return (
    <div className="App">
      {/* 
      //Router
      //Signin
      //Signup
      //forgot password
      //login with google
      */}
        <Navbar/>
        {/* <Signup/> */}
        <Signin/>
     
    </div>
  );
}

export default App;
