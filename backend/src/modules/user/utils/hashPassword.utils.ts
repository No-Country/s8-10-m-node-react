import * as bcrypt from "bcrypt";

class HashPassword {

    constructor() {

    }

    async hashPassword(password: string) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    }

    async comparePassword(password: string, hash: string) {
        const result = await bcrypt.compare(password, hash);
        return result;
    }
}

export const hashPassword = new HashPassword();