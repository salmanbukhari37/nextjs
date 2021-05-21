import {useRouter} from "next/router";

export default function SubClientsPage() {
    const {query, push} = useRouter();

    function loadProjectHandler() {
      // load data
      // push("/clients/salman/projecta");
      push({
        pathname: '/clients/[id]/[projectid]',
        query: {id: 'salman', projectid: "projecta"}
      })
    }

    return (
      <div>
        <h1>The Sub Clients Page <span style={{color: "red"}}>{query?.id}</span></h1>
        <button onClick={loadProjectHandler}>Load Project A </button>
      </div>
    )
  }
  