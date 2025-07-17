import Input from "../components/Input"
import Button from "../components/Button"

function LoginForm(){
    return(
        
        <form>
            <Input  type="text" placeholder = "UserName" name="username" />
            <Input type="text" placeholder = "password" name="password" />
            <Button type="submit" action="Submit" />
            <Button type="submit" action="Sing in" />
        </form>
        
    )
}

export default LoginForm