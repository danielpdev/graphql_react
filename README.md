# graphql_react

`query{
  company(id:"1"){
   	users{
      firstName
      company{
        name
        users{
          age
          company{
            description
          }
        }
      }
    } 
  }
}`