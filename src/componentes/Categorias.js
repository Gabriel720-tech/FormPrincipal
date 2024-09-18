import React from 'react'
import '../hojas-de-estilo/Categorias.css'

function Categorias(props) {
  return (
    <div className="valores">
      <div className="subtitulo">
        <div className="cat-texto">{props.cat}</div>
      </div>
      <input
        type="text"
        id="input-cuadro"
        className={`Contenedor-de-${props.cat}`}
          placeholder= {`Ingrese su ${props.cat}`}
        />
    </div>
  );
}

export default Categorias

// function Boton(props) {
  
//   //valor esta tomando el papel de props.children ya entregado
//   //el valor sera validado por la funcion para returnar-entregar un valor de "true" si no es un numero, si no es un . y si no es un simbolo =
//   //de lo contrario retornara un "false"
//   const esOperador = valor => {
//     return isNaN(valor) && (valor != '.') && (valor != '=');
//   };

//   return (
//     <div
//       className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()}> {/*si la funcion esOperador arroja un valor cierto,
//       me declarara operador, de lo contrario no decalra nada ,TRIM:remueve espacio del final */}
//       {props.children} {/*declarar el valor de children */}
//     </div>
//   );
// }