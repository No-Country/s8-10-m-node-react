import { BaseServices } from "../../shared/services/baseServices";
import { FavoriteContactsEntity } from "./favoriteContacts.entity";

export class FavoriteContactServices extends BaseServices<FavoriteContactsEntity> {
  constructor() {
    super(FavoriteContactsEntity);
  }

  async getAllByUser(userId: string): Promise<FavoriteContactsEntity[] | null> {
    const result = await this.repository.find({ where: { user: { userId } } });
    return result;
  }

  async getFavoriteContactByNickName(data: string) {
    const contact = await this.repository.findOne({ where: { nickname: data } });
    return contact;
  }
}

export const favoriteContactsServices = new FavoriteContactServices();
