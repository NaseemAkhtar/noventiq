import { lazy, Suspense } from "react"; 
import './assets/css/main.css'
const LoginPage = lazy(()=> import('./pages/loginPage'));


function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <LoginPage/>
      </Suspense>
    </div>
  );
}

export default App;
