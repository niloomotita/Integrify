const api = 'https://www.googleapis.com/urlshortener/v1/url';

const headers ={
    'Content-Type': 'application/json'
}

export const getExpanded =(url)=>{
    fetch(`${api}?shorturl=${url}`)
    .then(res => res.json())
    .then(data => data.longUrl)
}

