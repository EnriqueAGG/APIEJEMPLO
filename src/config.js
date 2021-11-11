//  guardar variables

//variable de entorno creada ?
import { config } from "dotenv"
config();

//variable de entorno port
export default{
    port: process.env.PORT || 3000,
}