export class MissingArgumentsError extends Error {
  constructor(readonly message: string) {
    super(message)
  }
}
