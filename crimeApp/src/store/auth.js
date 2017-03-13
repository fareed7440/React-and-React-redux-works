export function signUp(user){
    return{
        type:'signup',
        value : user
    }
}

export function signIn(user){
    return{
        type:'signIn',
        value : user
    }
}

export function LoggIn(user){
    return{
        type:'LoggIn',
        value : user
    }
}

 export function FindList (user){
     return{
         type:'find',
         value : user
     }
 }