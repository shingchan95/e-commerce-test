import './App.css';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import SortSection from './components/SortSection';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';

function App() {
  return (
    <div className='min-h-screen flex flex-col bg-gray-100'>
      <Header />
      <div className='flex flex-1 p-4'>
        <aside className='w-1/4 p-4 bg-white shadow-md'>
          <FilterSection />
        </aside>
        <section className='flex-1 ml-4'>
          <SortSection />
          <ProductCard />
          <Pagination />
        </section>
      </div>
    </div>
  );
}

export default App;
