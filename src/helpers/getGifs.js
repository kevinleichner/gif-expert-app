export const getGifs = async(categoria) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=OQuP1mW1D3fqP1ilowB8fRYxZriOdaaF&q=${categoria}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map( img => ({ //Hacemos que solo nos traiga el id, title y url del gif
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}