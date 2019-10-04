import { Body, Controller, Post } from '@nestjs/common';
import { ContactDto } from './contact.dto';

@Controller('contact')
export class ContactController {
  @Post()
  sayHello(@Body() contactDto: ContactDto) {
    const { myId, contactId } = contactDto;
    console.log(`Companion '${myId}' says hello to '${contactId}'.`);
    // Do some magic...
  }
}
