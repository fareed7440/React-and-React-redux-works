const initial_state ={
    isloggin:false,
    user:[],
    isRegistered:false,
};

const Authreducer=(state=initial_state,action)=>{
switch(action.type){
    case 'login':
    return Object.assign(state,{user:action.value,isloggin:true})
case 'signin':
  return Object.assign(state,{user:action.value,isRegistered:true})

    case 'isloggin':
    return Object.assign(state,{user:action.value,isloggin:true})
}
return state
}

export default Authreducer