import React from 'react'
import IconButton from '@mui/material/IconButton'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'

// import TableHead from '@mui/material/TableHead'
import { /* Table, TableContainer,*/ Typography } from '@mui/material'
import { Link } from 'react-router-dom'
// import {
//   getCountries,
//   addToCart,
//   removeFromCart,
//   // getCountryByName,
// } from '../../redux/actions'

const TableRowitem = ({ country }: any, { addButton }: any) => {
  return (
    <TableRow key={`country-${country.id}`}>
      <TableCell>
        <Avatar
          variant="square"
          src={country.flags.svg}
          alt={`${country.name.common} flag`}
        ></Avatar>
      </TableCell>
      <TableCell>
        <Link to={`/country/${country.id}`}>{country.name.common}</Link>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{country.region}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="body2">{country.population}</Typography>
      </TableCell>
      <TableCell>
        <IconButton
          color="primary"
          aria-label="add to cart"
          onClick={addButton} // I tried to pass it as a function to save the data, didnt work. any suggestionss?
        >
          <AddShoppingCartIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default TableRowitem
