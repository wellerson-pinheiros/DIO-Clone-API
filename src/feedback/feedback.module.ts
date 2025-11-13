import { Module } from "@nestjs/common";
import { FeedbackController } from "./controller/feedback.controller";
import { FeedbackService } from "./services/feedback.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FeedbackEntity } from "./entities/feedback.entity";

@Module({
    imports: [TypeOrmModule.forFeature([FeedbackEntity])],
    controllers: [FeedbackController],
    providers: [FeedbackService],  
    exports: []
})
export class FeedbackModule {}