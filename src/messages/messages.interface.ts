import { IsString } from "class-validator";

export class MessageRes {
   id: number;
   message: string;
}
export class MessageReq {

   @IsString()
   message: string;
}