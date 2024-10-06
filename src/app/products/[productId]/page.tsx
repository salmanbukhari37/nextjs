import { MetaData } from "next";

export const generateMetaData = async ({ params }: Props): MetaData => {
  return {
    title: `Product ${params.productId}`,
  };
};

type Props = {
  params: { productId: number };
};

export default function ProductsDetails({ params }: Props) {
  return (
    <>
      <h1>Product Details Page {params.productId}</h1>
    </>
  );
}
