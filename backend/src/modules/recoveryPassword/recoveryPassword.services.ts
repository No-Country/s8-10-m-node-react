import { nodeMailerManager } from "../../config/nodemailer";
import { BaseServices } from "../../shared/services/baseServices";
import { UserEntity } from "../user/user.entity";
import { RecoveryPasswordEntity } from "./recoveryPassword.entity";

export class RecoveryPasswordService extends BaseServices<RecoveryPasswordEntity> {
  constructor() {
    super(RecoveryPasswordEntity);
  }

  async verifyEmail(email: string) {
    const userRepository = await this.getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { email } });
    if(!user) throw new Error("User not found");
    await userRepository.update({ email }, { isVerify: true });
    return { message: "User authenticated" };
  }

  async recoveryPasswordServices(email: string) {
    const userRepository = await this.getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { email } });
    if (!user) throw new Error("User not found");
    const token = Math.random().toString(20).substring(2, 12);
    await userRepository.update({ email }, { password: token });
    await nodeMailerManager.recoveryPasswordEmail(email, user.fullName, token);
    return { message: "Check your email with you new password" };
  }
}