import { useState } from 'react';
import { InputCategoria, GifGrid } from './components';

export const GifExpertApp = () => {

    const [ categorias, setCategorias ] = useState (['One Punch']); //Los Hooks no pueden ir dentro de condiciones (if)

    const agregarCategoria = ( nuevaCategoria ) => { 

        if ( categorias.includes(nuevaCategoria)) return;

        setCategorias([nuevaCategoria, ...categorias]); //Toma el valor que ya tiene categorias y le agrega 'Valorant'
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            {/* <input type="text" />  No creamos el elemento input ya que en react se intenta que cada componente se pueda reutilizar, por eso lo creamos en otro archivo dentro de Components y lo importamos*/}
            <InputCategoria 
                //setCategorias={setCategorias} /* Podemos crear props para comunicarse entre componentes */ 
                onNuevaCategoria = { agregarCategoria } //event => agregarCategoria(event)
            />

            {/* Listado de Gif */}
            {
                categorias.map( (categoria) => ( //Separo cada elemento de categorias en categoria
                    <GifGrid 
                        key= {categoria} //El key es como un id obligatorio que hay que ponerle a los li y tiene que ser unico
                        categoria = {categoria} 
                    /> 
                ))
            }
                {/* Gif Item */}
        </>
    )
}
