import React from 'react';

import { useStore } from '../../store';
import { udpateItem } from '../../actions';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export const Listold = () => {
  const [{ items, filter }, dispatch] = useStore();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell children='Description' />
          <TableCell children='Done' />
        </TableRow>
      </TableHead>
      <TableBody>
        {items.filter(t => RegExp(filter, 'i').test(t.name)).map(item => (
          <TableRow key={item.id}>
            <TableCell children={item.name} />
            <TableCell>
              <Checkbox
                checked={item.done}
                onChange={() =>
                  dispatch(udpateItem({ ...item, done: !item.done }))
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};