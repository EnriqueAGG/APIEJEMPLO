//controllers - las acciones de los usuarios

import { getConnection,sql,queries} from "../database";


//exporta el archivo/funcion  res.send('products!!!');
export const getProducts = async (req, res) => {
    try {
        //traer los productos de la BD
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProducts);
        // console.log(result);

        res.json(result.recordset);


    } catch (error) {
        res.status(500); //error del servidor
        res.send(error.message);

    }
};

//añadir datos post
export const createNewDatosProducts = async (req, res) => {

    const {
        marca,
        modelo,
        numeroserie,
        ubicacion,
        usuarioRed,
        estatus,
        sucursal,
        numeroActivoFijo,
        asignado,
        costo,
        ip,
        macAddress,
        SO
    } = req.body //datos que el cliente esta enviando

    //validacion de campos
    if (marca == null || modelo == null) {
        return res.status(400).json({
            msg: 'Bad Request. Please Fill all fields'
        });
    }

    try {
        const pool = await getConnection(); // CONEXION
        //consultas
        await pool
            .request()
            .input('marca', sql.VarChar, marca)
            .input('modelo', sql.VarChar, modelo)
            .input('numeroserie', sql.VarChar, numeroserie)
            .input('ubicacion', sql.Text, ubicacion)
            .input('usuarioRed', sql.VarChar, usuarioRed)
            .input('estatus', sql.VarChar, estatus)
            .input('sucursal', sql.VarChar, sucursal)
            .input('numeroActivoFijo', sql.VarChar, numeroActivoFijo)
            .input('asignado', sql.Text, asignado)
            .input('costo', sql.Decimal, costo)
            .input('ip', sql.VarChar, ip)
            .input('macAddress', sql.VarChar, macAddress)
            .input('SO', sql.VarChar, SO)
            .query(queries.createNewProduct);


        res.json('marca, modelo, numeroserie, ubicacion, usuarioRed, estatus, sucursal, numeroActivoFijo, asignado, costo, ip,  macAddress, SO');
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }


};


//producto por id 
export const getProductById = async (req, res) => {
    //funcion de id en rutas :id
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("Id", id).query(queries.getProductById);
    

    res.send(result.recordset[0]);
};


//borrar
export const deleteProduct = async (req, res) => {
    //funcion de id en rutas :id
    const { id } = req.params;

    const pool = await getConnection();
    const result = await pool.request().input("Id", id).query(queries.deleteProduct);
    

    res.sendStatus(204);//respuesta vacia
};

//contar
export const getTotal = async (req, res) => {
    
    const pool = await getConnection();
    const result = await pool.request().query(queries.getTotal);
  res.json(result.recordset[0]['']);
};

//actualizar 
export const updateProduct = async (req, res) => {
    
    const {
        marca,
        modelo,
        numeroserie,
        ubicacion,
        usuarioRed,
        estatus,
        sucursal,
        numeroActivoFijo,
        asignado,
        costo,
        ip,
        macAddress,
        SO
    } = req.body


    const {id} = req.params


    if (marca == null || modelo == null) {
        return res.status(400).json({
            msg: 'Bad Request. Please Fill all fields'
        });
    }

    const pool = await getConnection() // CONEXION
    //consultas
    await pool
        .request()
        .input('marca', sql.VarChar, marca)
        .input('modelo', sql.VarChar, modelo)
        .input('numeroserie', sql.VarChar, numeroserie)
        .input('ubicacion', sql.Text, ubicacion)
        .input('usuarioRed', sql.VarChar, usuarioRed)
        .input('estatus', sql.VarChar, estatus)
        .input('sucursal', sql.VarChar, sucursal)
        .input('numeroActivoFijo', sql.VarChar, numeroActivoFijo)
        .input('asignado', sql.Text, asignado)
        .input('costo', sql.Decimal, costo)
        .input('ip', sql.VarChar, ip)
        .input('macAddress', sql.VarChar, macAddress)
        .input('SO', sql.VarChar, SO)
        .input('id', sql.Int, id)
        .query(queries.updateProduct);

        res.json({marca, modelo, numeroserie, ubicacion, usuarioRed, estatus, sucursal, numeroActivoFijo, asignado, costo, ip,  macAddress, SO});



        
};


//login 

export const getUsu = async (req, res) => {
    //funcion de id en rutas :id
    const { username, password } = req.body;

    const pool = await getConnection();
    const result = await pool.request().input("username", username).input("password", password).query(queries.getUsu);
    
    if(!result.recordset[0]){
    return res.send("NO FOUND!!")
    }
    res.send(result.recordset[0]);
};
