/* eslint-disable no-unused-vars */
export enum Status {
  NotFound = 404,
  NoContent = 204,
  BadRequest = 400,
  InternalServerError = 500,
  Unauthorized = 401,
  Created = 201,
  Ok = 200,
}

export interface IResponse<Body = any> {
  body?: Body
  status?: Status
}

export interface IController {
  handle(req: any): Promise<IResponse | void>
}
