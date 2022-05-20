import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const TableHeader = () => {
  const headerss = ['Flag', 'Name', 'Region', 'Population', 'Add to cart']
  return (
    <TableHead>
      <TableRow>
        {headerss.map((header: any) => (
          <TableCell>
            <Typography variant="body2">{header}</Typography>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

export default TableHeader
