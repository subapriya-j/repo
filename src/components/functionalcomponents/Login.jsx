import {useReducer} from "react";
const initialState={count:0};
function reducer(state,action)
{    switch(action.type){
    case 'increment':
        return{count:state.count+1}
    case 'decrement':
        return{count:state.count-1}
   case 'reset':
        return{count:state.count=0}
    default:
        throw new Error();
}}
const Login=()=>
{ const[state,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <h1>This page is meant for user Login</h1>
              Count:{state.count}
              <p></p>
            <button onClick={()=>dispatch({type:'increment'})}> Add </button>
            <button onClick={()=>dispatch({type:'decrement'})}> Sub</button>
           <button onClick={()=>dispatch({type:'reset'})}> Reset</button>
            <br></br><br></br>
        </div>
    )
    }
export default Login;