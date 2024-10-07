import Link from "next/link";
import LineChart from "../../components/line-chart";

export const metadata = {
  title: "Dashboard",
  description: "It will show charts",
};

export default function BarChart() {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Bar Chart</h1>
      <LineChart />
    </>
  );
}
