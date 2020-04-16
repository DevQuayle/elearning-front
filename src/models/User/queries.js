export const LOGIN = `
    mutation login($email: String!, $password:String!){
      login(loginData:{
        email: $email,
        password: $password
      }){
        _id
        token
        name
        surname
        role{
            key
            name
            permissions
        }
      }
    }
`
