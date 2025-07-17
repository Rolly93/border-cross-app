export default function Input({type , placeholder,name}){
    return(
        
        <div className="input"> 
            <label type={type} name={name}>{placeholder}:</label>
            <input type={type} placeholder={placeholder} name={name} />
    </div>
        )

}