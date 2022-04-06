import { ApiProperty } from "@nestjs/swagger";
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
} from "class-validator";
import * as mongoose from 'mongoose'
import { CATAGORY_NAME } from "../../users/schema/catagory-name.enum";
import { ILOB } from "../interface/lob.interface";
import { LOBDocument } from "../schema/lob.schema";

export class CreateLobDto {

  @IsOptional()
  @ApiProperty()
  @IsMongoId()
  _id?: mongoose.Types.ObjectId;

  @IsNotEmpty()
  @IsEnum(CATAGORY_NAME)
  @ApiProperty()
  name: CATAGORY_NAME


  public static from(dto: CreateLobDto) {
    const it = new CreateLobDto();
    it._id = dto._id;
    it.name = dto.name;
    return it;
  }

  public static fromEntity(entity: LOBDocument): ILOB {
    return this.from({
      _id: entity._id,
      name: entity.name,
    });
  }

  public static toEntity(dto: CreateLobDto) {
    const it = new CreateLobDto();
    it.name = dto.name
    return it;
  }

}
