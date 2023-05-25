export class UserDto {
  constructor(
    public userId: string, 
    public email: string, 
    public phone: string,
    public address: string, 
    public country: string, 
    public postalCode: string,
    public fullName:string,
    public lastName:string
){}
}