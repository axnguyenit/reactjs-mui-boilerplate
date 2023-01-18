import { useEffect, useState } from 'react';

import { userService } from '~/services';
import { ListParams, Pagination, User } from '~/services/models';

export default function useUserList({ page, limit }: ListParams) {
  const [userList, setUserList] = useState<Array<User>>([]);
  const [pagination, setPagination] = useState<Pagination>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await userService.getUserList({
          limit,
          page,
        });

        setUserList(response.data);

        if (response.pagination) {
          setPagination(response.pagination);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [page, limit]);

  return { pagination, userList };
}
