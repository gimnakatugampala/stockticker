
 // Latest News
 export const getlatestNews = async() =>{
    let res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=308faf4efa404c539cac219d9e6e0ac8');
    return res.json(); 
  }

//   Query News
export const getQueryNews = async(search) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${search}e&sortBy=popularity&apiKey=308faf4efa404c539cac219d9e6e0ac8`);
    return res.json(); 
}

// Trending API
export const TrendingTickerAPI = async() =>{
    let res = await  fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            // "x-rapidapi-key": 'c8dccee28fmsh12152de5d38488dp177f85jsnd5a544264eb2'
        }
    })
    return res.json()
}
