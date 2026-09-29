import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main className="flex justify-center-safe">
      <h2>404</h2>
      <p>Page not found</p>
      <Link to="/">Home</Link>
    </main>
  )
}

export default Error
