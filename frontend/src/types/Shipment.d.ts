
export interface LoginFormState {
    email: string;
    password: string;
    isValidUser: boolean;
}


export interface EmailOptions {
    isemailSender?:boolean,
    recipients?:string[],
}

export interface SFTOptions extends EmailOptions{
    isSFTSender?:boolean,
    routeSFTP?:string,
    localSFTP?:string,
    
    pasword?:string,
    host?:string,
    port?:number,
}
export interface ShipmentSubmission extends ShipmentType , SFTOptions{}