import { HttpStatusMessage } from '@common/enums/http-status-message.enum';
import { SuccessResponse } from '@common/response/success.response';
import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { instanceToPlain } from 'class-transformer';
import { Response } from 'express';
import { Observable, map } from 'rxjs';

export class TransformResponseInterceptor<T> implements NestInterceptor<T, SuccessResponse<T>> {
  public intercept(context: ExecutionContext, next: CallHandler<T>): Observable<SuccessResponse<T>> {
    const response: Response = context.switchToHttp().getResponse<Response>();
    const statusCode: number = response.statusCode;
    const message: string = response?.statusMessage ?? HttpStatusMessage[statusCode];

    return next.handle().pipe(map((data: T) => new SuccessResponse(statusCode, message, instanceToPlain(data) as T)));
  }
}