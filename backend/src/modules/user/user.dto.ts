export class UserDto {
  userId: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  postalCode: string;
  constructor(userId: string, email: string, phone: string,
    address: string, country: string, postalCode: string) {
    this.userId = userId;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.country = country;
    this.postalCode = postalCode;
  }
}