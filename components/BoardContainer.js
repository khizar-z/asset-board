import BoardArticle from './BoardArticle'

export default function BoardContainer({ articles }) {
  return (
    <div className="container">
      {articles.map((article) => (
        <BoardArticle key={articles.indexOf(article) + 1} article={article} />
      ))}
    </div>
  )
}

/*

      */