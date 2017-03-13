const initialState = {
    user:[],
};


const UserReducer =(state=initialState,action)=>{
    switch(action.type){
        case 'find':
        return Object.assign(state,{user:action.value})
    }
    return state
}
export default UserReducer