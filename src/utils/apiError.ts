class ApiError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

export default ApiError;
