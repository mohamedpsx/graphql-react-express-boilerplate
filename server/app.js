import express from 'express';
import  MLabDatabase from './db';
import { ApolloServer } from 'apollo-server-express';
import graphiqlExpress from 'express-graphql';
import { TypesDefinitions, Resolvers } from './schema/schema';
import cors from 'cors';

// App setup
const app = express();
app.use(cors());
app.listen(4000, () => { console.log('server is running on port: 4000') });

// Database setup
const db = new MLabDatabase({dbname: 'graphqldb', dbuser: 'dbuser', dbpassword: 'dbuser123', username: 'ds011452', port: 11452});
db.connect().onOpen(() => { console.log('db connected.') });

// Apollo Server setup
const server = new ApolloServer({ typeDefs: TypesDefinitions, resolvers: Resolvers });
server.applyMiddleware({app, path: '/api'});

// Activate GraphiQL
app.use('/dev', graphiqlExpress({ endpointUrl: '/api' }));
