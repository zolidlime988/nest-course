import { readFile, writeFile } from "fs/promises";
import { MessageReq, MessageRes } from "./messages.interface";

export class MessageRepository {
   async findOne(id: number) {
      try {
         const content = await readFile('db.json', 'utf-8');
         const messages: MessageRes[] = JSON.parse(content);
         return messages.find(val => val.id === id);
      } catch (err) {
         throw new Error(err)
      }
   }
   async findAll() {
      try {
         const content = await readFile('db.json', 'utf-8');
         return JSON.parse(content) as MessageRes[]
      } catch (err) {
         throw new Error(err)
      }
   }
   async insert(message: MessageReq) {
      try {
         const content = await readFile('db.json', 'utf-8');
         const messages: MessageRes[] = JSON.parse(content);
         const id = Math.floor(Math.random() * 100000)
         messages.push({
            id: id,
            message: message.message
         })
         writeFile('db.json', JSON.stringify(messages))
         return true
      } catch (err) {
         throw new Error(err)
      }
   }
}