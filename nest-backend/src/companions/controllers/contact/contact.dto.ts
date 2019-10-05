import { ApiModelProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiModelProperty()
  readonly myId: string;

  @ApiModelProperty()
  readonly contactId: string;
}
