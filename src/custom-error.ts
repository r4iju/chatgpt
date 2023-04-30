// customError.ts
export class FetchError extends Error {
  response: Response

  constructor(response: Response) {
    super(`Fetch failed: ${response.status} ${response.statusText}`)
    this.name = 'FetchError'
    this.response = response
  }
}
