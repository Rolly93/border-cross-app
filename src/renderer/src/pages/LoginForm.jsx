import Input from "../components/Input"
import Button from "../components/Button"
import Circle from "../assets/decoration/circle"

function LoginForm(){
    
    return(
    
    <>
    
        <Circle/>
        <form>
            <h3>Login in Here</h3>
            <Input  type="text" placeholder = "UserName" name="username" />
            <Input type="text" placeholder = "Password" name="password" />
            <Button type="submit" action="Submit" />
            <Button type="submit" action="Sing in" />
        </form>
        </>
        
    )
}


export default LoginForm