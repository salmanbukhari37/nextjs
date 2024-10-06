import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: number; productId: number };
}) {
  if (params?.reviewId > 1000) {
    return notFound();
  }

  return (
    <>
      <h1>
        Review Details Page {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
}
