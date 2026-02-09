import { useNavigate, useParams } from "react-router-dom";

function ProductDetailPage({ products }) {
    const { productId } = useParams();
    const product = products[Number(productId) - 1];
    const navigate = useNavigate();
    
    return (
        <div className="product-detail">
            <h1>Product Detail Page</h1>
            
            <div className="button-group">
                <button onClick={() => navigate(-1)}>뒤로가기</button>
                <button onClick={() => navigate('/')}>홈으로</button>
            </div>
            
            {products.length !== 0 ? (
                <ul>
                    <li>상품 번호: {product.id}</li>
                    <li>상품명: {product.name}</li>
                    <li>판매자: {product.email}</li>
                    <li>상세 설명: {product.body}</li>
                </ul>     
            ) : (
                <div className="loading">Loading...</div>
            )}
        </div>
    );
}

export default ProductDetailPage;