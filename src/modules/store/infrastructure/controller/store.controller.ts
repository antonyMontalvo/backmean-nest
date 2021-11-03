import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Tiendas')
@Controller('stores')
export class StoreController {
  constructor() {}
}
