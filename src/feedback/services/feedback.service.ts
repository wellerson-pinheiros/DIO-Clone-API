import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { FeedbackEntity } from "../entities/feedback.entity";
@Injectable()
export class FeedbackService {
    constructor (
        @InjectRepository(FeedbackEntity)
        private feedbackRepository: Repository<FeedbackEntity>,
    ){}

    async findAll(): Promise<FeedbackEntity[]> {
        return await this.feedbackRepository.find({
            relations: { usuario: true, postagem: true },
        });
    }

    async createFeedback(feedback: FeedbackEntity): Promise<FeedbackEntity> {
        return await this.feedbackRepository.save(feedback);
    }

    async deleteFeedback(id: number): Promise<DeleteResult> {
        return await this.feedbackRepository.delete(id);
    }

    updateFeedback(feedback: FeedbackEntity): Promise<FeedbackEntity> {
        return this.feedbackRepository.save(feedback);
    }
}