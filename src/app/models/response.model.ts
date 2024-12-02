export interface APIResponse<T> {
  message: string;
  result: boolean;
  data?: T;
}
