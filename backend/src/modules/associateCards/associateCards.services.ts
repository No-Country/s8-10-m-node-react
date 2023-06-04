import { BaseServices } from "../../shared/services/baseServices";
import { AssociateCardsEntity } from "./associateCards.entity";

export class AssociateCardsServices extends BaseServices<AssociateCardsEntity> {
  constructor() {
    super(AssociateCardsEntity);
  }

  async getAllByAccount(id: number) {
    return await this.repository.find({ where: { accountUser: { id } } });
  }
}
