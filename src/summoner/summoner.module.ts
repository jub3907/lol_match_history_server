import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SummonerResolver } from './summoner.resolver';
import { Summoner, SummonerSchema } from './schema/summoner.schema';
import { SummonerService } from './summoner.service';
import { MasteryResolver } from './mastery.resolver';
import { MasteryService } from './mastery.service';
import { SummonerBasicResolver } from './summoner-basic.resolver';
import { LeagueEntryModule } from 'src/league-entry/league-entry.module';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Summoner.name, useFactory: () => SummonerSchema },
    ]),
    // MasteryModule,
    LeagueEntryModule,
  ],
  providers: [
    SummonerResolver,
    SummonerService,
    MasteryService,
    MasteryResolver,
    SummonerBasicResolver,
  ],
  exports: [MongooseModule, SummonerService],
})
export class SummonerModule {}
