import axios from "axios"
import BoardContainer from "../components/BoardContainer"
import { server } from "../config"

export default function Home({ boardData }) {
  return (
    <div>
      <h1 className="font-grotesk">{boardData.topicName}</h1>
      <BoardContainer articles={boardData.articles} />
    </div>
  )
}

export async function getStaticProps() { 
  const board = await fetch(server, { method: 'GET' });
  const boardData = await board.json();

  return {
    props: {
      boardData
    }
  }
}