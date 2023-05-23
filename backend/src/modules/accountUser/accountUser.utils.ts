
class AccountUserUtils {
  generateAccountNumber(): string {
    const min = 100000000000000;
    const max = 999999999999999;
    const accountNumber = (Math.floor((Math.random() * (max - min + 1)) + min)).toString();
    return accountNumber;
  }
}

export const accountUserUtils = new AccountUserUtils();