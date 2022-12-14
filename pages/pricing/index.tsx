import Link from "next/link"
import Main from "../../components/layouts/Main"


const index = () => {
  return (
    <div className="container">
      <Main>
        <h1>Pricing Page</h1>
        <h1 className="title">
          ir a <Link href="/">Pricing</Link>
        </h1>

        <p className="description">
          Get started by editing <code className="code">pricing/contact.js</code>
        </p>
      </Main>
    </div>
  )
}

export default index

