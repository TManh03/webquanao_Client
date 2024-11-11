import ProductCard from "@/components/product_card";
import { getSearchedProducts } from "@/lib/actions/actions";

const SearchPage = async ({ params }: { params: { query: string } }) => {
  const searchedProducts = await getSearchedProducts(params.query);

  const decodedQuery = decodeURIComponent(params.query);
  return (
    <div className="px-10 py-5">
      <p className="text-heading3-bold my-10">
        Tìm kiếm cho từ khóa {decodedQuery}
      </p>
      {!searchedProducts ||
        (searchedProducts.length === 0 && (
          <p className="text-body-bold my-5">
            Không có kết quả nào được tìm thấy
          </p>
        ))}
      <div className="flex flex-wrap gap-16">
        {searchedProducts.map((product: any) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default SearchPage;
