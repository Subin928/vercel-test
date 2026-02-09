import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Header from "./components/Header";

// Pages
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFound from './pages/NotFound';

// Student Components
import StudentHeader from './components/StudentHeader';
import StudentDetail from './components/StudentDetail';

function App() {
  const [products, setProducts] = useState([]);

  // API에서 상품 데이터 가져오기
  const getProducts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setProducts(res.data.slice(0, 10));
    } catch (error) {
      console.error('데이터 로딩 실패:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <Header />
      
      <Routes>
        {/* 메인 */}
        <Route path="/" element={<MainPage />} />
        
        {/* 상품 */}
        <Route path="/products" element={<ProductPage products={products} />} />
        <Route path="/products/:productId" element={<ProductDetailPage products={products} />} />

        {/* 학생 실습 */}
        <Route path="/student" element={<StudentHeader />} />
        <Route path="/student/:name" element={<StudentDetail />} />
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;