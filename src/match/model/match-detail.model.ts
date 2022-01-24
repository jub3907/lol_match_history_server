import { Field, ObjectType } from '@nestjs/graphql';
import { MatchBaseModel } from './match-base.model';
import { ParticipantModel } from './participant.model';

@ObjectType()
export class MatchDetailModel extends MatchBaseModel {
  @Field((type) => [ParticipantModel])
  participants: ParticipantModel[];
}
