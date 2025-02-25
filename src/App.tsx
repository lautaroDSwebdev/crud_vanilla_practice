import { useEffect, useState } from "react"
import { FormInputs, Table } from "./components"
import { Tipos } from "./typex"
import { helpHttp } from "./helper/HelperHttp"

export const App = () => {


  const api = "http://localhost:3000/persona"
  const [edit, setedit] = useState(null)

  const [db, setDB] = useState<Tipos[] | null>(null)
  const [error, seterror] = useState(false)
  const [load, setload] = useState(false)

  useEffect(() => {
    helpHttp().get(api).then(e => {
      setload(true)
      if (!e.err) {
        setDB(e)
      } else {
        setDB(null)
        seterror(e)
      }
      setload(false)
    })

  }, [api])
  const Create = (data: Tipos) => {
    console.log("Peticion")
    console.log(data)
    data.id = Date.now()
    const op = { body: data, headers: { "content-type": "application/json" } }

    helpHttp().post(api, op).then(e => {
      e.err ? seterror(true) : setDB([...db, e])
    })
  }
  const Update = (data: Tipos) => {
    // console.log(edit)
    const endp = `${api}/${data.id}`
    console.log(endp)
    const op = { body: edit, headers: { "content-type": "application/json" } }
    helpHttp().put(endp, op).then(e => {
      
      if (e.err){
        seterror(true)
      }else{
        const dataNew = db?.map(e => e.id === data.id ? data : e)
        setDB(dataNew)

      }
    })
  }
  // console.log(edit)
  return (
    <div className="components">
      <FormInputs Create={Create} edit={edit} setedit={setedit} Update={Update} ></FormInputs>

      {error && <h2>Ocurrio un error</h2>}
      {load && <h2>Cargando...</h2>}

      {db ? <Table db={db} edit={edit} setedit={setedit} ></Table> : <p>sin datos</p> }
    </div>
  )
}
