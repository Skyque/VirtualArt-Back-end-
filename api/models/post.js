const res = require("express/lib/response");
const { use } = require("../routes/userRoutes");
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient(); 

class Post{

    constructor(pid, ptitulo, pdescripcion, pcategoria, pusuario){
       this.idpublicaciones = pid;
       this.titulo = ptitulo;
       this.descripcion = pdescripcion;
       this.idcategoria = pcategoria;
       this.idusuario = pusuario;
    }

    //ACTIONS
    static async findAllCategories() {
        var categoriesArray = await prisma.categorias.findMany();
        var categories = new Post(0,"","",0, 0);
        categories=categoriesArray;

        console.log(categories);
        if(categories != null)
            return categories;
        else
            return 1;
    }

    static async findCategoryById(id) {
        var result = await prisma.categorias.findFirst({
            where: {
                idcategorias:parseInt(id)
            }
        });
        var posts = result;
        //console.log(categories);
        if(posts != null)
            return posts;
        else
            return 1;
    }

    static async findAll() {
        var result = await  prisma.publicaciones.findMany({
            orderBy: {
                idpublicaciones: 'desc',
            },
        });
        var posts = result;
        //console.log(categories);
        if(posts != null)
            return posts;
        else
            return 1;
    }
    
    static async findById(id) {
        var post = await prisma.publicaciones.findFirst({
            where: {
                idpublicaciones: parseInt(id)
            },
        });
        var postLoaded = new Post(0,"","","", "");
        postLoaded=post;

        console.log(postLoaded);
        if(postLoaded != null)
            return postLoaded;
        else
            return 1;
    }
    
    static async getLast(){
        //Busco el id del post más reciente
        var result = await  prisma.publicaciones.findMany({
            select: {
                idpublicaciones: true
            },
            orderBy: {
                idpublicaciones: 'desc',
            },
            take: 1,
        });

        const id = result;
        console.log(id);
        return id;  
    }

    static async getUserPosts(id){
        //Busco el id del post más reciente
        var result = await  prisma.publicaciones.findMany({
            where:{
                idusuario: parseInt(id)
            }
        });

        console.log(result);
        return result;  
    }

    static async getCategoryPosts(id){
        //Busco el id del post más reciente
        var result = await  prisma.publicaciones.findMany({
            where:{
                idcategoria: parseInt(id)
            }
        });

        console.log(result);
        return result;  
    }

    static async create(data) {
        var returnPost = new Post(0, data.title, data.description, data.category, data.user);

        const result =  await  prisma.publicaciones.create({
            data: {
                titulo: data.title,
                descripcion: data.description,
                idcategoria: parseInt(data.category),
                idusuario: parseInt(data.user)
            }
        });
        
        returnPost=result;
        return returnPost;
    }
    
    static async update(id, data) {
        var returnUser = new User(0, data.email, data.username, data.password, "");

        const result =  await  prisma.usuario.update({
            where:{
                idusuario: parseInt(id)
            },
            data: {
                username: data.username,
                userpassword: data.password,
                email: data.email
            }
        });
        
        returnUser=result;
        return returnUser;
    }
    
    static delete(id) {
        // Código para eliminar un usuario específico de una base de datos o un archivo
    }
}

module.exports = Post;