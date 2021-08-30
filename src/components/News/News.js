import React,{useEffect} from 'react'
import Card from 'react-bootstrap/Card'


import './styles.css'


const News = ({getlatestNews,news,setNews,isLoading,setisLoading,getQueryNews ,search}) => {

    useEffect(() => {

        if(search === ''){
             // Latest News
          getlatestNews()
          .then(data => {
            setisLoading(false)
              setNews(data.articles)
            })

        }else{

            // Query News
            getQueryNews(search)
            .then(data => {
                setisLoading(false)
                setNews(data.articles)
                console.log(search)
            })

        }   
        
    },[search])

    return (
        <div>
       
           <h2 style={{marginLeft:30}}>{search? search : 'Latest'} News</h2>
           <div className="cards">
               {isLoading ? (
                <div className="spinner-border text-primary m-auto" role="status"></div>
               ) : news?.map((inews,index) =>(
                <Card className="card" key={index}>
                <Card.Img variant="top" src={inews.urlToImage ||  'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} style={{height:'50%'}} />
                <Card.Body>
                    <Card.Title>{inews.title}</Card.Title>
                    <Card.Text>
                        {inews.description}
                    </Card.Text>     
                    <a variant="primary" href={inews.url} className="url"> Read More</a>
                </Card.Body>
                </Card>
           ))}
        
        </div>
        </div>
    )
}

export default News
