export default function BoardArticle({ article }) { 
  return (
    <div className="article">
      <h1 className="font-grotesk">{article.title}</h1>
      <h2 className="font-questrial">{article.author}</h2>
      <p>{article.body}</p>
    </div>
  )
}