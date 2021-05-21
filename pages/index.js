import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Porfolio</Link>
        </li>
        <li>
          <Link href="/blog/2020">Blogs</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  )
}
