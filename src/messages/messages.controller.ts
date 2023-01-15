import { Body, Controller, Get, HttpCode, HttpStatus, InternalServerErrorException, NotFoundException, Param, Post } from '@nestjs/common';
import { MessageReq, MessageRes } from './messages.interface';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

   constructor(private messagesService: MessagesService) { }
   
   @Get()
   async getMessages(): Promise<MessageRes[]> {
      return await this.messagesService.getMessages()
   }
   @Get('/:id')
   async getMessageById(@Param('id') id: number): Promise<MessageRes> {
      const messages = await this.messagesService.getMessageById(id)
      console.log(messages);
      
      if (!messages) {
         throw new NotFoundException('Error not found: ' + id)
      }
      return messages
   }
   @Post()
   async createMessage(@Body() message: MessageReq) {
      const create = await this.messagesService.createMessage(message)
      if (create) {
         return { statusCode: HttpStatus.OK, message: "OK" }
      }
      throw new InternalServerErrorException()
   }
}
