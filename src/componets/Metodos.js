function Metodos () {
    const mostrarMensaje = () => {
        console.log("Si funciona el método dentro");
    }
    return (
        <div>
            <button onClick={() => mostrarMensaje ()}>Pulsa el botoncin</button>
            
        </div>
    )
    
}
export default Metodos;