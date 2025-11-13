import { Controller, Delete, Get, HttpCode, HttpStatus, Post, Put } from "@nestjs/common";

import { FeedbackService } from "../services/feedback.service";
import { DeleteResult } from "typeorm";
import { FeedbackEntity } from "../entities/feedback.entity";

@Controller('feedback')
export class FeedbackController {
    constructor (private readonly feedbackService: FeedbackService) 
    {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<FeedbackEntity[]> {
        return this.feedbackService.findAll();
    }       
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    createFeedback(feedback: FeedbackEntity): Promise<FeedbackEntity> {
        return this.feedbackService.createFeedback(feedback);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateFeedback(feedback: FeedbackEntity): Promise<FeedbackEntity> {
        return this.feedbackService.updateFeedback(feedback);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteFeedback(id: number): Promise<DeleteResult> {
        return this.feedbackService.deleteFeedback(id);
    }

    
}