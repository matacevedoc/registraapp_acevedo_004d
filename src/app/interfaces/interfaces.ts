export interface RespuestaTopHeadlines{
    status: string;
    data: FechasFeriadas[] ;
}

export interface FechasFeriadas {
    title: string;
    date: string;
    extra: string;
    inalienable: string;
    type: string;
}

export interface Users{
    id: number,
    username: String;
    password:String;
    role: string;
    isactive: boolean
}
//post
export interface User{
    username: string;
    password: string;
    role: string;
    isactive: boolean
}

//get, put, delete
export interface IPalabras{
    id:number;
    username: string;
    palabra: string;
}

//post
export interface IPalabra{
    username: string;
    palabra: string;
}