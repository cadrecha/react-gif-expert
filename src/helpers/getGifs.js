export const getGifs = async(category) => {
    
    
    const url = `http://api.giphy.com/v1/gifs/search?api_key=482NSQxUaNg4si0ycvXiyx9G3o0OGs83&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title, 
        url: img.images.downsized_medium.url
    }))
    return gifs;
}