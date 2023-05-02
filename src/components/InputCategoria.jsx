import { useState } from 'react';

export const InputCategoria = ( { onNuevaCategoria } ) => { //Desestructuramos el setCategorias de las props

    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) =>  { //En lugar de recibir el event, desestructuramos su target (event.target)
        setInputValue( target.value ); //Cuando haya un cambio en el input se actualiza el value que muestra con lo que hayamos presionado
    }      

    const onSubmit = (event) => { //Evento cuando presionemos enter
        event.preventDefault();
        if( inputValue.trim().length <= 1) return; //Si solo hay un caracter o menos entonces no se ejecuta lo siguiente

        //setCategorias( categorias => [inputValue, ...categorias ]); //Obtenemos el valor de categorias y le insertamos el inputValue seguido de las categorias
        onNuevaCategoria( inputValue.trim() );
        setInputValue (''); //Limpiamos el valor que ya agregamos a categorias
    }

        return (
            <form onSubmit={(event) => onSubmit(event)}>
                <input 
                    type="text"
                    placeholder="Buscar gifs" 
                    //onChange = { (event) => onInputChange(event) } //Como recibo lo mismo que envío no necesito especificarlo
                    onChange = { onInputChange } //El evento toma la letra que se presionó con todas sus caracteristicas y se la pasa a OnInputChange
                />
            </form>
        )
}