import { useEffect, useState } from "react"
import { dataInicial } from "../datainicial"
import { TipoEventoChange } from "../typex"

export const FormInputs = ({ edit, setedit, Update, Create }) => {
    const [form, setform] = useState(dataInicial)
    // console.log("Cuerpo del edit desde form")
    // console.log(edit)
    useEffect(() => {
        edit ? setform(edit) : setform(dataInicial)
    }, [edit])

    const Reset = () => {
        setform(dataInicial)
        setedit(null)
    }
    const handleChange = (e: TipoEventoChange) => {
        setform({
            ...form,
            [e.target.name]: e.target.value,
        })

        console.log("datos del change")
    }
    const handSubmit = (e: TipoEventoChange) => {
        e.preventDefault()
        // if (!form.edad || !form.dni || !form.apellido || !form.nombre) return console.log("completar datos")
        form.id === null ? Create(form) : Update(form) 
        
        return  Reset()
    }
    return (
        <div>
            <h1>{!edit ? "Agregar" : "Editar"}</h1>
            <section className="components">
                <form onSubmit={handSubmit} action="">
                    <input onChange={handleChange} value={form.nombre || ""} name="nombre" type="text" placeholder="nombre" />
                    <input onChange={handleChange} value={form.apellido || ""} name="apellido" type="text" placeholder="apellido" />
                    <input onChange={handleChange} value={form.edad || ""} name="edad" type="number" placeholder="edad" />
                    <input onChange={handleChange} value={form.dni || ""} name="dni" type="text" placeholder="dni" />
                    <input type="submit" value={`Enviar`} />
                    <input type="reset" value="limpiar" onClick={Reset} />
                </form>
            </section>
        </div>
    )
}
