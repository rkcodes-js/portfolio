import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <h1 className="">Rajkaran Mishra.</h1>
          <p>Coder | Hacker | Writer</p>
        </Link>
        <div className={styles.nav_links}>
          <Link href="https://medium.com/@imrajkaran" target="_blank">
            BLOG
          </Link>
          <Link href="/newsletter" target="_blank">
            NEWSLETTER
          </Link>
          <Link href="">PROJECTS</Link>
          <Link href="">ABOUT</Link>
          <Link href="">CONTACT</Link>
        </div>

        <div className={styles.nav_icons}>
          <a href="https://www.youtube.com/@ItsRkEver/" target="_blank">
            <i className={`fa-brands fa-youtube ${styles.nav_icon}`}></i>
          </a>
          <a href="https://twitter.com/RealRajkaran" target="_blank">
            <i className={`fa-brands fa-twitter ${styles.nav_icon}`}></i>
          </a>
          <a href="https://www.linkedin.com/in/raj-karan/" target="_blank">
            <i className={`fa-brands fa-linkedin-in ${styles.nav_icon}`}></i>
          </a>
          <a href="https://github.com/rajkaranm" target="_blank">
            <i className={`fa-brands fa-github ${styles.nav_icon}`}></i>
          </a>
          <a href="https://www.instagram.com/realrajkaran/" target="_blank">
            <i className={`fa-brands fa-instagram ${styles.nav_icon}`}></i>
          </a>
        </div>
      </div>
    </nav>
  );
}