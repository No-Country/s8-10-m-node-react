class CardUtils {

  constructor() {
    
  }

  generateCardNumber(): string {
    let min: number = 1000000000000000;
    let max: number = 9999999999999999;
    const cardNumber = (Math.floor((Math.random() * (max - min + 1)) + min)).toString();
    return cardNumber;
  }

  generateCardCvv(): string {
    let min: number = 100;
    let max: number = 999;
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

