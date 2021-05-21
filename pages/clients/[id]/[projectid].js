import { useRouter } from "next/router";

export default function ProjectDetail() {
    const {query} = useRouter();
    return (
      <div >
        <h1>The Portfolio project Page {query?.projectid}</h1>
      </div>
    )
}
  