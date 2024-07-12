import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Head from '../components/Head';
import NavBar from '../components/NavBar';

function App() {

  return (
    <>
      <div style={{ display:"flex", flexDirection:'column',width:'100%',}}>
        <Head />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App