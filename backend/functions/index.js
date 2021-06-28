const functions = require('firebase-functions');
const app = require('express')();
const fs = require('fs')
const { ApolloServer } = require('apollo-server-express');

const typeDefs = fs.readFileSync('./graphql/schema.graphql', {encoding: 'utf8'})
const resolvers = require('./graphql/resolvers/index')

// Global Config
require('dotenv').config()

const server = new ApolloServer( {
    typeDefs, 
    resolvers,
    context: ({ req }) => ({ req }) // Will take request body' and forward it to the context
} )
server.applyMiddleware({ app, path:'/', cors: true })

exports.graphql = functions.https.onRequest(app)
