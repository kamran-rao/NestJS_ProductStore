import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MastersModule } from './masters/masters.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MastersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/ProductStore',
      database: 'ProductStore',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
