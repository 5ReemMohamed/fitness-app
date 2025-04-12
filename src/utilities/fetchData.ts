export const options = {
    method: "GET",
    headers: {
      'x-rapidapi-key': 'b3ae6bea60msha78bc3a2a3e8e06p190642jsn902fe8ffd306',
		  'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    },
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b3ae6bea60msha78bc3a2a3e8e06p190642jsn902fe8ffd306',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  export async function fetchData(url:string,options:object) {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  }


  
