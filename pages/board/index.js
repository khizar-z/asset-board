import axios from "axios"
import BoardContainer from "../../components/BoardContainer"
import { useEffect, useState } from "react"

export default function Home(props) {
  const [boardData, setBoardData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('/api/boards')
      .then((res) => res.json())
      .then((data) => {
        setBoardData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!boardData) return <p>Failed to load board data</p>

  return (
    <div>
      <h1 className="font-grotesk">{boardData.topicName}</h1>
      <BoardContainer articles={boardData.articles} />
    </div>
  )
}