import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "./user.entity";

export class UserService extends BaseServices<UserEntity> {
  constructor() {
    super(UserEntity);
  }
}
