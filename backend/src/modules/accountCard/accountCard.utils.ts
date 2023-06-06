class CardUtils {

  generateCardNumber(): string {
    const min = 100000000000000;
    const max = 999999999999999;
    const cardNumber = (Math.floor((Math.random() * (max - min + 1)) + min)).toString();
    return cardNumber;
  }

  generateCardCvv(): string {
    const min = 100;
    const max = 999;
    const cvv = (Math.floor((Math.random() * (max - min + 1)) + min)).toString();
    return cvv;
  }

  generateCardExpiration(): Date {
    const currentDate = new Date();
    const expirationDate = new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), currentDate.getDate());
    return expirationDate;
  }
}

export const cardUtils = new CardUtils();