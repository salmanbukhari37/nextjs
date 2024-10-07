"use client";

const getRandomNumber = (count: number): number => {
  return Math.floor(Math.random() * count);
};

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomNumber(2);

  if (random === 1) {
    throw new Error("Error loading review...");
  }

  return (
    <>
      {children}
      <h2>Feature Products</h2>
    </>
  );
}
