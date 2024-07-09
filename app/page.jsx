import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam nulla eos laudantium nostrum, quia iusto, at omnis adipisci eius fuga libero. Libero voluptate commodi error non? Molestias numquam id veniam?</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis nemo esse ad, voluptatibus autem pariatur, vero adipisci dolores accusamus nostrum nulla cumque quod impedit quas praesentium facilis odio dolorum velit!</p>
      </div>

      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit dicta illo enim totam eius id quis facere? Dolorum, voluptates. Ab atque, unde fugit provident eligendi molestiae accusantium ut adipisci!</p>
      </div>
    </main>
  )
}
