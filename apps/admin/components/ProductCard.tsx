
const ProductCard = ({ product }: any) => {
  const {
    title,
    description,
    price,
    rating,
    ratingCount,
    image,
    discount,
    topSelling,
  } = product;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-xl font-bold text-green-600">${price}</p>
            {discount > 0 && (
              <p className="text-sm text-gray-500 line-through">
                ${price + discount}
              </p>
            )}
          </div>
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐ {rating}</span>
            <span className="text-gray-500">({ratingCount})</span>
          </div>
        </div>
        {topSelling && (
          <span className="inline-block mt-3 px-2 py-1 bg-red-500 text-white text-sm rounded">
            Top Selling
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
