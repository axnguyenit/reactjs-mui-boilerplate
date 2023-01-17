export interface IPaginationParameters {
  limit: number;
  page: number;
  totalRows: number;
}

export interface IListParameters {
  page?: number;
  limit?: number;

  [key: string]: any;
}

export interface IListResponse<T> {
  results: T[];
  pagination?: IPaginationParameters;
}

export interface IPostData<T = any> {
  result?: T;
  msg: string;
}

export interface IError {
  errors: {
    msg: string;
  }[];
}
