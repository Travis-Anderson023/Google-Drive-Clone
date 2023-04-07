import * as mongoose from 'mongoose';
import {environment} from "../../environment/environment"

export const initConnection = async () => await mongoose.connect(environment.MONGOOSE_URL, {dbName:environment.DB_NAME})