export const useMovieList = async (props?: { query?: any }) => {
  try{

    const query = props?.query
    const search = props?.query?.search || 'movie'
    const config = useRuntimeConfig();
    const apiKey = config.public.API_KEY;
  
    const url = new URL("https://www.omdbapi.com?s=" + search + "&apikey=" + apiKey);
    const params = new URLSearchParams(url.search);
    if (query) {
      Object.keys(query)?.forEach(key => {
        params.append(key, query[key]);
      })
    }
    const response: any = await $fetch(url.origin + '?' + params.toString());
  
    return response?.Search;
  }
  catch(err){

    return null

  }

}