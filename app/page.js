import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Quiz App</h1>
        <link href="/quiz">
          <button>
            start Quiz
          </button>
        </link>
      </div>
    </main>
  )
}
