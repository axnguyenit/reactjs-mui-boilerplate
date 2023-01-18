import axiosInstance from '~/utils/axios';

import { ListParams, ListResponse, User } from './models';

export const userService = {
  getProfile: (): Promise<User> => {
    const url = '/api/users/profile';

    return axiosInstance.get(url);
  },

  getUserList: async ({
    limit,
    page,
  }: ListParams): Promise<ListResponse<User>> => {
    const response = await import('~/mocks/user-list.json');
    const userList = response.default;

    const startRecord = (page - 1) * limit;
    const endRecord = startRecord + limit;
    const sliceData = <Array<User>>userList.slice(startRecord, endRecord);

    return {
      data: sliceData,
      pagination: {
        limit,
        page,
        totalRows: userList.length,
      },
    };
  },
};
