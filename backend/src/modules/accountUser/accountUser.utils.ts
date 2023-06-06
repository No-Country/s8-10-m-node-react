
class AccountUserUtils {
  generateAlias(first: string, second: string, dni: string): string {
    const FirstNumberDni = dni.slice(0, 1);
    const LastNumberDni = dni.slice(-1);
    const alias = first + "." + second + FirstNumberDni + LastNumberDni;
    return alias;
  }

  generateAccountNumber(): string {
    const min = 100000000000000;
    const max = 999999999999999;
    const accountNumber = (Math.floor((Math.random() * (max - min + 1)) + min)).toString();
    return accountNumber;
  }
}

export const accountUserUtils = new AccountUserUtils();