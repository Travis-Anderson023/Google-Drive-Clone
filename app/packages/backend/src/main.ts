import "reflect-metadata";
import {startGraphQLServer} from './app/api/graphql/index';

const start = async () => {
    await startGraphQLServer();
}

void start().catch(err=>{
    console.log(err)
})