import { authUtils } from "../../modules/auth/auth.utils"
import { JwtPayload } from "jsonwebtoken"

export class BaseUtils {

async checkPayload(token:string){
    try {
    const verify=authUtils.verifyToken(token) as JwtPayload
    if(!verify)return null
    return verify.payload
    } catch (error) {
    return null
    }
  }

}

export const baseUtils=new BaseUtils()