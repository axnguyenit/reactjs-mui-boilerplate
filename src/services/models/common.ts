export interface Pagination {
  limit: number;
  page: number;
  totalRows: number;
}

export interface ListParams {
  page: number;
  limit: number;

  [key: string]: any;
}

export interface ListResponse<T> {
  data: Array<T>;
  pagination?: Pagination;
}

export interface PostData<T = any> {
  result?: T;
  msg: string;
}

export interface Error {
  errors: Array<{
    msg: string;
  }>;
}
