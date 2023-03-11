import axios from "axios"
import { useEffect, useState } from "react"




// news screen for the users
const News = () => {

    const [articles, setArticles] = useState([])
    

    useEffect(() => {
        // this api will run when page will load
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=5ac687e7b1c741168831774a62ce3958').then(data => {
            console.log(data.data)
            setArticles(data.data.articles)
        })
        
    }, [])

    



    return <>
        <h2>News</h2>
        <hr />
        <div className="d-flex flex-column align-items-center">
           
            {articles.map( (article, index) => {
                let art = article
                return (
                    <div className="card mb-3 p-5" style={
                        {
                            width:"70%"
                        }
                    } key={"newItem"+ index+1}>
                        <img alt="News Image" className="news-img card-img-top" src={art.urlToImage}   />
                        <div className="card-body">
                            {/* <div className="news-item"></div> */}
                            
                            <h3><a href={art.url.toString()}> {art.title} </a></h3>
                            <p>{art.description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </>
}


export default News