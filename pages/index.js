import axios from "axios"
import BoardContainer from "../components/BoardContainer"

async function getBoard() {
  const board = await axios.get("/api/updateboard")
  console.log(board.data)
  return board.data
}

export default function Home() {
  return (
    <div>
      <BoardContainer articles={getBoard().articles}/>
    </div>
  )
}
