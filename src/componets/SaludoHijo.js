function SaludoHijo (props) {
    let ejecutarPadre = props.metodoPadre;
    return (
        <div>
            <h3>Hola soy el Hijo</h3>
            <button onClick={ejecutarPadre}>Pulsa Boton Hijo</button>
        </div>
    )
}
export default SaludoHijo
