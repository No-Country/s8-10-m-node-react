import { UserEntity } from "../user/user.entity";
import { authUtils } from "./auth.utils";
export class AuthServices {
  

  async postService(email: string) {
    const user = await UserEntity.findOneBy({ email });
    const token = authUtils.generateToken(user?.userId as string);
    return {
      user,
      token
    };
  }

  
}
