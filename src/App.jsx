import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="overflow-hidden mx-auto max-w-5xl flex-col align-center justify-center xl:px-0 scroll-smooth">
      <Header />
      <div className='px-5 md:px-0'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
