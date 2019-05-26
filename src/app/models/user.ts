export class User {

    constructor(_id='', nombre='' , apellidos='', correo='',password='', username='', avatar='', verificado=false){
        this._id = _id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.correo = correo;
        this.username = username;
        this.password = password;
        this.avatar = avatar;
        this.verificado = verificado;
    }

    _id: string;
    nombre: string;
    apellidos: string;
    correo: string;
    username: string;
    password: string;
    avatar: string;
    verificado: boolean;
}
