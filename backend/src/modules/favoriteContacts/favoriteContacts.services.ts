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

//   async postServiceContact(data: favoriteContactDto, userId: string): Promise<FavoriteContactsEntity | null> {
//     const { nickname, alias } = data;
//     const accountUserRepo = await this.getRepository(AccountUserEntity);
//     const userRepo = await this.getRepository(UserEntity);
//     const userOwner = await userRepo.findOne({ where: { userId } });
//     const userAccount = await accountUserRepo.findOne({ where: { alias } });
//     if (!userOwner) throw new Error("this user not exist");
//     if (!userAccount) throw new Error("this account not exist");
//     const favorite = {
//       nickname,
//       accountUser: userAccount,
//       user: userOwner,
//     };
//     return await this.repository.save(favorite);
//   }
}

export const favoriteContactsServices = new FavoriteContactServices();
