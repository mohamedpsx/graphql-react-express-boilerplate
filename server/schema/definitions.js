export default `
    type Example {
        id: String!
        text: String!
    }
    
    type Query {
        examples: [Example!]!
    }
    
    type Mutation {
        createExample(text: String!): Example
    } 
`;