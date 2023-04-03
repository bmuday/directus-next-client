import { useState, useEffect } from "react";
import Product from "../components/Product";
import { useRouter } from "next/router";
import useLogout from "@/hooks/useLogout";
import useFetchItems from "@/hooks/useFetchItems";

export default function ProductsList() {
  const router = useRouter();
  const [products, setProducts] = useState(null);
  const [fetchError, setFetchError] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

  const logout = async () => {
    const error = await useLogout();

    if (error) {
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 2000);
    } else {
      setSuccess("Déconnexion...");
      setTimeout(() => {
        setSuccess("");
        router.push("/");
      }, 2000);
    }
  };

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
          <button
            onClick={logout}
            className="mt-20 p-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow"
          >
            Logout
          </button>
          {success && <p>{success}</p>}
          {error && <p>{error}</p>}
        </div>
      )}
    </>
  );
}
