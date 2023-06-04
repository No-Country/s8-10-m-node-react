import { AppDataSource } from "../../config/postgreSql";
import { AccountUserEntity } from "../accountUser/accountUser.entity";

class FavoriteContactsUtils {
  async dataFilter(data: string) {
    const accountAliasUser = await AppDataSource.getRepository(AccountUserEntity).findOne({ where: { alias: data } });
    const accountNumberUser = await AppDataSource.getRepository(AccountUserEntity).findOne({
      where: { accountNumber: data },
    });
    if (!accountAliasUser && !accountNumberUser) return false;
    if (accountAliasUser) return accountAliasUser;
    if (accountNumberUser) return accountNumberUser;
  }
}

export const favoriteContactsUtils = new FavoriteContactsUtils();

