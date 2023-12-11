const API_KEY=process.env.REACT_APP_API_KEY
const BASE_KEY=process.env.REACT_APP_BASE_KEY
export function fetchGenreData()
{
    return new Promise(async (resolve, reject) => {
         const res=await fetch(`${BASE_KEY}/genre/movie/list?api_key=${API_KEY}`);
         const data=await res.json()
         resolve({data:data.genres})
    })
}
export function fetchMovieData(type,genres)
{
   
    return new Promise(async (resolve, reject) => {
      var movieData=[]  
      for(let i=1;movieData.length<60 && i<10;i++)  
      {
          const res=await fetch(`${BASE_KEY}/discover/${type}?page=${i}&api_key=${API_KEY}`);
          const {results}=await res.json()
         
          results.forEach((item) => {
             var genresData=[]
             item.genre_ids.forEach((Id)=>
             {
                 const obj=genres.find(({id})=>id===Id)
                
                 genresData.push(obj?.name)
             })
             if(item.backdrop_path)
             {
                movieData.push({
                    id:item.id,image:item.backdrop_path,name:item?.original_name?item.original_name:item.original_title,genres:genresData.slice(0,3)
                })

             }
          });
          
      }
         resolve({data:movieData})
    })
}
export function fetchMovieDataByGenre(genre,type,genres)
{
    
    return new Promise(async (resolve, reject) => {
      var movieData=[]  
      for(let i=1;movieData.length<60 && i<10;i++)  
      {
          const res=await fetch(`${BASE_KEY}/discover/${type}?page=${i}&api_key=${API_KEY}&with_genres=${genre}`);
          const {results}=await res.json()
         
          results.forEach((item) => {
             var genresData=[]
             item.genre_ids.forEach((Id)=>
             {
                 const obj=genres.find(({id})=>id===Id)
                
                 genresData.push(obj?.name)
             })
             if(item.backdrop_path)
             {
                movieData.push({
                    id:item.id,image:item.backdrop_path,name:item?.original_name?item.original_name:item.original_title,genres:genresData.slice(0,3)
                })

             }
          });
          
      }
         resolve({data:movieData})
    })
}