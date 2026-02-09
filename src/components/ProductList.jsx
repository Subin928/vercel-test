import ProductItem from "./ProductItem";

function ProductList({ products }) {
    // 로딩 처리
    if (products.length === 0) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ProductList;