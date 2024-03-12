import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/home/Index';
import BookFinder from '../pages/bookFinder/Index';
import BookDetail from '../pages/bookDetail/Index';

const RouteHandler = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/bookfinder" element={<BookFinder />}/>
          <Route exact path="/bookdetail/:id" element={<BookDetail />}/>
        </Routes>
      </main>
      <Footer />
    </>
   );
}
 
export default RouteHandler;