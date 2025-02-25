import { Tipos } from "../typex"

export const Table = ({ db, setedit, edit }: { db: Tipos[], setedit: any, edit: any }) => {
    // console.log("Cuerpo del edit desde la tabla")
    // console.log(edit)
    return (
        <div className="div_table">
            <h2>Tabla persona</h2>
            <table>
                <thead>
                    <tr>
                        <th>nombre</th>
                        <th>apellido</th>
                        <th>edad</th>
                        <th>dni</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        db.length > 0 ? db.map(e => (
                            <tr key={e.id}>
                                <td>nombre: {e.nombre}</td>
                                <td>apellido {e.apellido}</td>
                                <td>edad: {e.edad}</td>
                                <td>dni: {e.dni}</td>
                                <td>
                                    {/* se le pasa el cuerpo completo de lo seleccionado */}
                                    <button onClick={() => setedit(e)}>editar</button>
                                    {/* <button>eliminar</button> */}
                                </td>
                            </tr>
                        ))
                            :
                            <tr>
                                <td>Sin datos</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
