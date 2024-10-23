import Gallery from "@/components/Gallery"
import ProductCard from "@/components/product_card"
import ProductInfo from "@/components/ProductInfo"
import { getProductDetails} from "@/lib/actions/actions"

const ProductDetails = async ({ params }: { params: { productId: string } }) => {
    const productDetails = await getProductDetails(params.productId)


    return (
        <>
            <div className="flex justify-center items-start gap-16 py-10 px-5 max-md:flex-col max-md:items-center">
                <Gallery productMedia={productDetails.media} />
                <ProductInfo productInfo={productDetails} />
            </div>

            <div className="flex flex-col items-center px-10 py-5 max-md:px-3">
                <p className="text-heading3-bold">Sản phẩm liên quan</p>
                <div className="flex flex-wrap gap-16 mx-auto mt-8">
                    
                </div>
            </div>
        </>
    )
}

export const dynamic = "force-dynamic";

export default ProductDetails