import { JwtPayload, sign, verify } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  payload: string | object | Buffer;
}
export class AuthUtils {
 
  private secretKey = process.env.SECRET_KEY!;

  generateToken(payload: string | object | Buffer) {
    const jwtPayload = { payload };
    const jwt = sign(jwtPayload, this.secretKey, {
      algorithm: "HS256",
      expiresIn: "2h",
    });
    return jwt;
  }

  verifyToken(token: string) {
    try {
      const decoded = verify(token, this.secretKey);
      return decoded;
    } catch (error) {
      return null;
    }
  }
}

export const authUtils = new AuthUtils();
