import "reflect-metadata";
import {startGraphQLServer} from './app/api/graphql/index';
import { initConnection } from "./app/db/dataSource";


const start = async () => {
    await initConnection();
    await startGraphQLServer();
}

void start().catch(err=>{
    console.log(err)
})