
import { TypeLoginRequest } from "src/app/types/Auth";
import instance from "./instance";


export const signin = (user: TypeLoginRequest) => {
  const url = `/signin`;
  return instance.post(url, user);
}


