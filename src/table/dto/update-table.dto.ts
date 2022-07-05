import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto.ts';

export class UpdateTableDto extends PartialType(CreateTableDto) {}
