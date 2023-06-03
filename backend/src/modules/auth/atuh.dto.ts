import { AssociateCardsEntity } from "../associateCards/associateCards.entity";
import { BusinessEntity, Status, Transaction } from "../business/business.entity";
import { FavoriteContactsEntity } from "../favoriteContacts/favoriteContacts.entity";
import { UserEntity } from "../user/user.entity";

interface ArrayCards {
  cardNumber: string;
  holder: string;
  cvv: string;
}

interface ArrayBusiness {
  transaction: Transaction;
  status: Status;
  amount: number;
  subject: string;
}

interface ArrayFavoriteContacts {
  nickName: string;
  accountNumber: string;
  alias: string;
}

export class AuthDto {
  constructor() {}
  infoReturn(user: UserEntity): object {
    console.log(user);
    const { account, address, country, email, favoriteContacts, fullName, lastName, phone, postalCode } = user;
    const { accountAmount, accountCard, accountNumber, alias, associateCards, business } = account[0];
    const { cardNumber, cvv, expiration, emission } = accountCard[0];

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
        issuingEntity: card.issuingEntity
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
