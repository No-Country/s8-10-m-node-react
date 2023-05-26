import { Status, Transaction } from "./business.entity";

export class BusinessDto{
 
constructor(
    public amount: number,
    public currencyId?: number, 
    public subject?:string,
    public senderId?: string,
    public receiverId?: string,
    public accountNumber?:string,
    public transaction?:Transaction,
    public status?:Status,
){}

}