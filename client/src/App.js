import './App.css';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import SortSection from './components/SortSection';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <Header />
      <div>
        <aside>
          <FilterSection />
        </aside>

        <section>
          <SortSection />
          <ProductCard />
          <Pagination />
        </section>
      </div>
    </div>
  );
}

export default App;
