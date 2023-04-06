import * as mongoose from 'mongoose';
import * as env from 'env-var';


const URL = env.get('MONGOOSE_URL').asUrlString();
const DBNAME = env.get('MONGOOSE_DB_NAME').default('APP_DB').asString();
export const initConnection = async () => {
    await mongoose.connect(URL, {dbName:DBNAME})
}