const { use } = require("../routes/userRoutes");

class User{

    constructor(pid, pusername, ppassword){
        this.id=pid;
        this.username=pusername;
        this.password=ppassword;
    }

    //GETS
    static getId(){
        return this.id;
    }

    static getUsername(){
        return this.username;
    }

    static getPassword(){
        return this.password;
    }

    //ACTIONS
    static login(username, password){
        if(username == "Skyque" && password == "Mario123")
            return 0;
        else
            return 1;
    }

    static findAll() {
        // Código para recuperar todos los usuarios de una base de datos o un archivo
    }
    
    static findById(id) {
        // Código para recuperar un usuario específico de una base de datos o un archivo
    }
    
    static create(data) {
        // Código para crear un nuevo usuario en una base de datos o un archivo
    }
    
    static update(id, data) {
        // Código para actualizar un usuario específico en una base de datos o un archivo
    }
    
    static delete(id) {
        // Código para eliminar un usuario específico de una base de datos o un archivo
    }
}

module.exports = User;