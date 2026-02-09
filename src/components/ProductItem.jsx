import { Link } from "react-router-dom";

function ProductItem({ product }) {
    return (
        <div className="product-item">
            {/* 동적 라우팅 링크 */}
            <Link to={`/products/${product.id}`}>
                <ul>
                    <li>{product.name}</li>
                    <li>{product.body}</li>
                </ul>        
            </Link>
        </div>
    );
}

export default ProductItem;