"use client";
import { notFound } from "next/navigation";

const getRandomNumber = (count: number): number => {
  return Math.floor(Math.random() * count);
};

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: number; productId: number };
}) {
  const random = getRandomNumber(2);

  if (params?.reviewId > 1000) {
    return notFound();
  }

  // if (random === 1) {
  //   throw new Error("Error loading review...");
  // }

  return (
    <>
      <h1>
        Review Details Page {params.reviewId} for product {params.productId}
      </h1>
    </>
  );
}
