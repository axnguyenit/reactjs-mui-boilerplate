import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';

import useUserList from '../hooks/userUserList';

export default function UserList() {
  const { userList } = useUserList({
    limit: 20,
    page: 1,
  });

  return (
    <TableContainer sx={{ minWidth: 800 }}>
      <Table>
        <TableBody>
          {userList.length > 0 &&
            userList.map((user) => {
              const { id, email, fullName, role } = user;

              return (
                <TableRow hover key={id} tabIndex={-1} role="checkbox">
                  <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle2" noWrap>
                      {fullName}
                    </Typography>
                  </TableCell>
                  <TableCell align="left">{email}</TableCell>
                  <TableCell align="left">{role}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
