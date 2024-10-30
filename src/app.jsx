import Navbar from './components/navbar';
import Header from './components/header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';

function App() {
    return (
      <>
        <header>
        <Header />
        <Navbar />  
        </header>
        <Outlet />
        <Footer />
      </>
    );
  }
  
  export default App;