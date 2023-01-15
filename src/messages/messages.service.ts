import { Injectable } from '@nestjs/common';
import { MessageReq, MessageRes } from './messages.interface';
import { MessageRepository } from './messages.repository';

@Injectable()
export class MessagesService {
   
   constructor(
      private messageRepo: MessageRepository
   ) { }

   getMessages(): Promise<MessageRes[]> {
      return this.messageRepo.findAll()
   }
   getMessageById(id: number): Promise<MessageRes> {
      return this.messageRepo.findOne(id)
   }
   createMessage(message: MessageReq):Promise<boolean> {
      return this.messageRepo.insert(message)
   }
}