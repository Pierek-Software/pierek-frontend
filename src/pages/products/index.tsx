// Import necessary dependencies
import React from "react";
import Link from "next/link";
import ClientLayout from "../../layouts/ClientLayout";
import ApiClient from "../../api";
import { GetStaticProps } from "next";
import { amazonLinkBuilder } from "../../utils";

const ProductsPage = ({ products }) => {
  return (
    <ClientLayout
      title={"Products"}
      description={"Products Description"}
      keywords={"Products"}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Products", link: "/products" },
      ]}
    >
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {products.map((product) => (
          <div key={product.slug} className="mb-4">
            <h1 className="my-3 text-center text-2xl">{`${product.brand.name} ${product.name} 👇`}</h1>

            <Link href={`/products/${product.slug}`}>
              <img
                src={product.images[0]}
                alt={`Product Image - ${product.name}`}
                className="w-full rounded-t-lg shadow-md"
              />
            </Link>
            <a
              href={amazonLinkBuilder(product.asin)}
              target="_blank"
              rel="nofollow"
            >
              <button className="w-full rounded-b-md bg-primary px-4 py-2 font-bold">
                View at Amazon.com
              </button>
            </a>
          </div>
        ))}
      </div>
    </ClientLayout>
  );
};

// Fetch products data at build time
export const getStaticProps: GetStaticProps = async () => {
  const apiClient = new ApiClient();
  const products = await apiClient.getProducts();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
