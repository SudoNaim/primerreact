import SaludoHijo from "./SaludoHijo"
function SaludoPadre () {
    
    const metodoPadre = () => {
        console.log("Función dentro del código del PADRE")
    }
    
    return (
        <div>
            <h1>HOLA SOY EL PADRE</h1>
            <SaludoHijo metodoPadre = {metodoPadre}></SaludoHijo>
            <SaludoHijo metodoPadre = {metodoPadre}></SaludoHijo>
        </div>
    )
}
export default SaludoPadre;