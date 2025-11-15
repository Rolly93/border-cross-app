type Person = {
    fName: string,
    lName: string,
    datebirth: Date|string,
    SCN?:string,
}
interface Employee extends Person{
    email: string;
    phoneNumber:string,
    password:string,
    cargo:"Custumer Representative" | "Driver" |"Administrador",
}
export interface UserProfile extends Person{
    userID:string,
    email: string,
    phoneNumber:string,

    accessToken:string,
}