import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    return setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `Product ${title}`,
  };
};

type Props = {
  params: { productId: number };
};

export default function ProductsDetails({ params }: Props) {
  return (
    <>
      <Link href="/">Home</Link>

      <h1>Product Details Page {params.productId}</h1>
    </>
  );
}
