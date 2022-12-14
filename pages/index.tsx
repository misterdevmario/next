import Link from "next/link";
import Main from "../components/layouts/Main";

export default function Home() {
  return (
    <Main>
      <h1>Home Page</h1>
      <h1 className="title">
        ir a <Link href="about">About</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/index.js</code>
      </p>
    </Main>
  );
}
