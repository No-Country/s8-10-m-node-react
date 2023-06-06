import { Status, Transaction } from "./business.entity";

export class BusinessDto {
  constructor(
    public senderId?: string,
    public receiverId?: string,
    public currencyId?: number,
    public amount?: number,
    public status?: Status,
    public transaction?: Transaction,
    public subject?: string
  ) // public accountNumber?:string,
  { }
}
