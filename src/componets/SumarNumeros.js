function SumanNumeros (props) {
    let suma = parseInt(props.numero1) + parseInt(props.numero2);
    
    console.log ("La suma de " +props.numero1+" + "+props.numero2 + " = " + suma);

    return (
        <div>
            <h1>Sumar números {props.numero1} y  {props.numero2}</h1>
        </div>
    )

}
export default SumanNumeros;