import { SignOptions, sign, verify, JwtPayload } from "jsonwebtoken";

export class AuthUtils {

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  private secretKey = process.env.SECRET_KEY!;

  generateToken(userId: string): string {
    const options: SignOptions = {
      expiresIn: "1h", 
    };
    return sign(userId, this.secretKey, options);
  }

  verifyToken (token: string) {
    try {
      const decoded = verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}

export const authUtils = new AuthUtils();