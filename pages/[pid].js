import axios from "axios"
import BoardContainer from "../components/BoardContainer"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router'

export default function DynamicHome(props) {
  const router = useRouter()
  const [boardData, setBoardData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    if (!router.isReady) return;
    const { pid } = router.query
    fetch('/api/boards/' + pid)
      .then((res) => res.json())
      .catch(err => {
        setBoardData(false)
      })
      .then((data) => {
        setBoardData(data)
        setLoading(false)
      })
  }, [router.isReady, router.query])

  if (isLoading) return <p>Loading...</p>
  if (!boardData) return <p>Failed to load board data</p>

  return (
    <div>
      <h1 className="font-grotesk">{boardData.topicName}</h1>
      <BoardContainer articles={boardData.articles} />
    </div>
  )
}