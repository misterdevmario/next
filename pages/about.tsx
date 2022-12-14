import Link from "next/link";
import Main from "../components/layouts/Main";
import Dark from "../components/layouts/Dark";






export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className="title">
        ir a <Link href="/">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page:JSX.Element) {
  return (
    <Main>
      <Dark>{page}</Dark>
    </Main>
  );
};
