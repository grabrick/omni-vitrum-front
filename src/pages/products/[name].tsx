import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import Products from "@/components/UI/Products/Products";
import { GetServerSideProps } from "next";
import { ProductService } from "@/services/products.service";
import ImagesSlider from "@/components/UI/ImagesSlider/ImagesSlider";

export default function ProductsPage({ product }: any) {
  return (
    <>
      <Head>
        <title>{product?.routeTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="48x48" href="/favicon.ico" />
      </Head>
      <Layout>
        <Products query={product} />
        <ImagesSlider />
      </Layout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const name: any = context.params?.name;
  let product
  const fetchedProduct = await ProductService.fetchProducts(name);
  product = fetchedProduct

  if (!fetchedProduct) {
    product = null;
  }

  return { 
    props: {
      product: product
    } 
  };
};