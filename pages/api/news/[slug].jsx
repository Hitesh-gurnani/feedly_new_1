// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { news } = require('./data.json')
export default (req, res) => {
    const newsArticle = news.filter((item) => item.slug === req.query.slug)
    console.log(newsArticle)
    res.status(200).json(news)
    res.status(200).json(newsArticle)
}
