import React from "react";
import ClientLayout from "../../layouts/ClientLayout";
import ApiClient from "../../api";
import { GetStaticPaths, GetStaticProps } from "next";
import { amazonLinkBuilder } from "../../utils";
import ProductSpecificationsSection from "../../components/sections/product/Specifications";

const ProductPage = ({ product }) => {
  const productName = `${product.brand.name} ${product.name}`;
  return (
    <ClientLayout
      title={productName}
      description={`${productName} description`}
      keywords={productName}
      breadcrumbs={[
        { name: "Home Page", link: "/" },
        { name: "Products", link: "/products" },
        { name: productName, link: "#" },
      ]}
    >
      <h1 className="text-3xl font-bold">{productName}</h1>

      <img
        src={product.images[0]}
        alt="Product Image 1"
        className="mb-4 w-full rounded-lg shadow-md"
      />

      {/* <p className=" text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        potenti. Vivamus bibendum quam in diam fermentum, a tincidunt justo
        tincidunt.
      </p> */}

      <ProductSpecificationsSection specifications={product.specifications} />

      <a href={amazonLinkBuilder(product.asin)} target="_blank" rel="nofollow">
        <button className="my-5 w-full rounded-md bg-orange-amazon px-4 py-2 font-bold">
          View at Amazon.com
        </button>
      </a>
    </ClientLayout>
  );
};

export const getStaticPaths = (async () => {
  const apiClient = new ApiClient();
  const paths = await apiClient.getProductsStaticPaths();
  return { ...paths, fallback: false };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = async (context) => {
  const apiClient = new ApiClient();

  const product = await apiClient.getProductBySlug(
    context.params.slug as string,
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
