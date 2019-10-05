import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ContactDto } from './contact.dto';

@ApiUseTags('companions')
@Controller('contact')
export class ContactController {
  @Post()
  @ApiOperation({ title: 'Say hello to a companion near you.' })
  @ApiResponse({ status: 201, description: 'A message describing who says hello to whom.' })
  sayHello(@Body() contactDto: ContactDto): string {
    const { myId, contactId } = contactDto;
    const message = `Companion '${myId}' says hello to '${contactId}'.`;
    // Do some magic...
    return message;
  }
}
