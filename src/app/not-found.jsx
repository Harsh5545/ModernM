import Link from "next/link"

const NotFound = () => {
  return (
    <div>
<h1 className="p-1 font-extrabold">NotFound</h1>
    <p>Sorry, the page you are looking for does not exist.</p>
    <Link href = "/">Return Home</Link>
</div>
  )
}

export default NotFound