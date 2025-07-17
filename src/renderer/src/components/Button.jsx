export default function Button({type , action}){
    return(
        <div className="button">
            
        <button type={type}>{action}</button>
        </div>
    )
}