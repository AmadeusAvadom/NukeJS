import Nuke from './lib/Nuke'

const App = () => {
    return (
        <div id="hola">
            <h1 id="algo">
                Hola
            </h1>
        </div>
    )
}

Nuke.render(<h1 id="adios">Saludo </h1>, document.getElementById("app"))
