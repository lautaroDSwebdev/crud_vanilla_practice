 export interface Tipos {
        id: number
        nombre: string
        apellido: string
        edad: number
        dni: number
    }

    export type TipoEventoChange = React.ChangeEvent<HTMLInputElement>
    export type TipoInput = React.FormEvent<HTMLFormElement>