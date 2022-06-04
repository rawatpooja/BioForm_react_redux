const initState ={
    list:[],
};

const bioinformation = (state = initState , action)=>{
if(action.type ==='ADD_DATA'){
    return{...state,list:[...state.list,action.payload]}
} else{
    return state;
}
}
export default bioinformation;