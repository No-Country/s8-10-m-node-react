export class UserDto {
  userId: string;
  fullName:string;
  lastName:string;
  email: string;
  phone: string;
  address: string;
  country: string;
  postalCode: string;
  constructor(userId: string, email: string, phone: string,
    address: string, country: string, postalCode: string,fullName:string,lastName:string) {
    this.userId = userId;
    this.fullName=fullName;
    this.lastName=lastName;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.country = country;
    this.postalCode = postalCode;
  }
}