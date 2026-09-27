export default class User {
    constructor(nombre, email, password, rol = 'user') {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}