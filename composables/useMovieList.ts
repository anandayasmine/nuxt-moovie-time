export const useMovieList = async (props?: { query?: any }) => {

  const query = props?.query
  const search = props?.query?.search || 'movie'
  const config = useRuntimeConfig();
  const apiKey = config.public.API_KEY;

  const url = new URL("http://www.omdbapi.com?s=" + search + "&apikey=" + apiKey);
  const params = new URLSearchParams(url.search);
  if (query) {
    Object.keys(query)?.forEach(key => {
      params.append(key, query[key]);
    })
  }
  const response: any = await $fetch(url.origin + '?' + params.toString());

  return response?.Search;

}