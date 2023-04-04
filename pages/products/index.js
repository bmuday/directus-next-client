import { useState, useEffect } from "react";
import Product from "../components/Product";
import { useRouter } from "next/router";
import useFetchItems from "@/hooks/useFetchItems";

export default function ProductsList() {
  const router = useRouter();
  const [products, setProducts] = useState(null);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await useFetchItems("products");

      if (data) setProducts(data);

      if (error) {
        setFetchError(error.message);
        setTimeout(() => {
          setFetchError("");
          router.push("/login");
        }, 2000);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      {!products && !fetchError && <div>Loading...</div>}
      {fetchError && <p>{fetchError}</p>}
      {products && (
        <div className="border-bottom flex flex-col justify-center items-center">
          <div>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
