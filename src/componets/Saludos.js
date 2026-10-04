function Saludos (props) {
    let daydate = "Domingo";
    let nombreProp = props.nombre;

    return (
        <div>
            <h1>Hola buenas hoy es {daydate}</h1>
            <h2>¡Espero que tengas un buen día {nombreProp}!</h2>
        </div>
    )
}
export default Saludos;