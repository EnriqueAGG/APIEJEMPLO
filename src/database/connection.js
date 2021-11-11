//modulo de conexion de mysql
import sql from 'mssql';
//configuracion de la BD
const dbSettings = {
    user: 'Desktop1',
    password: '1234',
    server: 'localhost',
    database: 'alamecenamiento',
    // port : 1433,
    //- protocolo TCP/IP ubicar puertos por defecto (protocolo name)
    options: {
        //conexion en desarollo.
        encryption: true,
        trustServerCertificate: true,
    },
};

//funcion para proteger la conexion 
export async function getConnection() {
    try {
        //----------> primera conexion para la BD

        //llamar a la bd
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.error(error)
    }

}

export {sql};
//consulta
//const result = await pool.request().query("SELECT 1");
//console.log(result); // ---> Resultado


// getConnection();