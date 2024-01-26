import '../../css/Login.css'
const Login=()=>
{ 
    return(
        <div>
        <h1>Login page</h1>
        <form >
            
            <label>name:</label>
            <input type="text" name="uname" required></input><br></br><br></br>
            <label>email-id:</label>
            <input type="text" name="email" required></input><br></br><br></br>
            <label>password:</label>
            <input type="password" name="psw" required></input><br></br><br></br>
            <input type="button" name="botton" value="Login" required></input>
            
        </form>
        </div>
    )
    }
export default Login;