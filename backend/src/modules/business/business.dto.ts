import { Status, Transaction } from "./business.entity";

export class BusinessDto{
 
constructor(
    public currencyId: number, 
    public amount: number,
    public subject:string,
    public senderId?: string,
    public receiverId?: string,
    public accountNumber?:string,
    public transaction?:Transaction,
    public status?:Status,
){}

}