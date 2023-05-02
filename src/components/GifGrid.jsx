
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({categoria}) => {
    //getGifs( categoria ); //Nunca hay que poner la ejecución de la función dentro del functional component
    //porque cada vez que se reprocese entonces va a volver a ejecutar la petición HTTP
    
    const { images, isLoading } = useFetchGifs( categoria ); //Custom Hook
  
    return (
        <>
            <h3>{categoria}</h3>
            {
                isLoading && (<h2>Cargando...</h2>) //Si isLoading es true ejecuta el h2, sinó no hace nada
            }

            <div className="card-grid">
                {
                    images.map((image) => (
                        <GifItem 
                        key={image.id}
                        { ...image } //Obtengo todas las props de image (id,title,url)
                        />
                    ))
                }
            </div>
        </>
    )
}
