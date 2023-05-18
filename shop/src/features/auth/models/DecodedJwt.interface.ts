import { DisplayUser } from "./index";


export interface DecodedJwt {
    user: DisplayUser;
    exp: number;
    iat: number;
}