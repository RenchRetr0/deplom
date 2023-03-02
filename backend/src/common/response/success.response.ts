import { ApiProperty } from '@nestjs/swagger';
import { BaseResponse } from './abstract/base.response';

/**
 * Success response class.
 *
 * @description This class describes success response object. Transform interceptor
 * will serialize controller return type to this type.
 */
export class SuccessResponse<T> extends BaseResponse {
  /**
   * Response message.
   *
   * @description Human-readable string that describes status of the response.
   */
  @ApiProperty()
  public readonly message!: string;

  /**
   * Reponse data.
   *
   * @description Payload of the response.
   */
  @ApiProperty()
  public readonly data?: T;

  constructor(statusCode: number, message: string, data?: T) {
    super(statusCode);
    this.message = message;
    this.data = data;
  }
}
