"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const navigateTo = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    navigateTo.push("/");
  };

  return (
    <>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
}
