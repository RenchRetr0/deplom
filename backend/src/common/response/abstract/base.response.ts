import { ApiProperty } from '@nestjs/swagger';

/**
 * Base response abstract class.
 *
 * @description This class describes base response object that other responses
 * must extend. We will use extended classes in the transformer interceptor that
 * will transform our controller return values.
 */
export abstract class BaseResponse {
  /**
   * Status code of the response.
   */
  @ApiProperty()
  public readonly statusCode: number;

  constructor(statusCode: number) {
    this.statusCode = statusCode;
  }
}