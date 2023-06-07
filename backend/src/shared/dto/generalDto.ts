import { AssociateCardsEntity } from "../../modules/associateCards/associateCards.entity";
import { BusinessEntity, Status, Transaction } from "../../modules/business/business.entity";
import { FavoriteContactsEntity } from "../../modules/favoriteContacts/favoriteContacts.entity";
import { UserEntity } from "../../modules/user/user.entity";
import { dateHandler } from "../utils/date.utils";

interface ArrayCards {
  cardNumber: string;
  holder: string;
  cvv: string;
}

export interface ArrayBusiness {
  transaction: Transaction;
  status: Status;
  amount: number;
  subject: string;
  date?: Date | string;
}

interface ArrayFavoriteContacts {
  nickName: string;
  accountNumber: string;
  alias: string;
}

export class GeneralDto {
  loginReturn(user: UserEntity): object {
    
    const { account, address, country, email, fullName, lastName, phone, postalCode, favoriteContacts } = user;
    const { accountAmount, accountCard, accountNumber, alias, associateCards, business } = account[0];
    const { cardNumber, cvv, expiration, emission, isActive } = accountCard[0];
    return {
      profile: {
        fullName,
        lastName,
        phone,
        postalCode,
        email,
        address,
        country,
      },
      favoriteContacts: this.favoriteContactsFilter(favoriteContacts),
      accountInfo: {
        amount: accountAmount[0].amount, //? Consultar por que es un array
        accountNumber,
        alias,
        dominoCard: {
          cardNumber,
          cvv,
          expiration,
          emission,
          isActive
        },
        associateCards: this.filterCards(associateCards),
      },
      movements: this.businessFilter(business),
    };
  }
  filterCards(cards: AssociateCardsEntity[] = []): ArrayCards[] {
    const arrayCards: ArrayCards[] = [];
    cards.forEach((card) => {
      const cardFilter = {
        cardNumber: card.cardNumber,
        holder: card.cardholder,
        cvv: card.cvv,
        issuingEntity: card.issuingEntity,
      };
      arrayCards.push(cardFilter);
    });
    return arrayCards;
  }

  businessFilter(business: BusinessEntity[] = []): ArrayBusiness[] {
    const arrayBusiness: ArrayBusiness[] = [];
    
    business.forEach((b) => {
      const newBusiness: ArrayBusiness = {
        status: b.status,
        amount: b.amount,
        subject: b.subject,
        transaction: b.transaction,
        date: dateHandler.formatDate(b.createdAt as Date),
      };
      arrayBusiness.push(newBusiness);
    });

    return arrayBusiness;
  }

  favoriteContactsFilter(contacts: FavoriteContactsEntity[] = []): ArrayFavoriteContacts[] {
    const arrayContacts: ArrayFavoriteContacts[] = [];
    contacts.forEach((contact) => {
      const newContact: ArrayFavoriteContacts = {
        accountNumber: contact.accountUser.accountNumber,
        alias: contact.accountUser.alias,
        nickName: contact.nickname,
      };
      arrayContacts.push(newContact);
    });
    return arrayContacts;
  }
}

export const generalDto = new GeneralDto();
