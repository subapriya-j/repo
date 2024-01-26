import '../../css/Signup.css'
const Signup=()=>{
    return(
        <div>
            <h1>Sign up</h1>
            <label>Name:</label>
            <input type="text" name="name" required></input><br></br><br></br>
            <label>Emailid:</label>
            <input type="text" name="email" required></input><br></br><br></br>
            <label>Password:</label>
            <input type="text" name="password" required></input><br></br><br></br>
            <label>Confirm Password:</label>
            <input type="text" name="psw" required></input><br></br><br></br>
            <input type="button" name="button" value ="Signup" required></input>
        
        </div>
    )
}
export default Signup;