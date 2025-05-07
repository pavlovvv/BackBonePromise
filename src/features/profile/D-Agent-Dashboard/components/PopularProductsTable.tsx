import { FC, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Select,
  MenuItem,
  IconButton,
  Chip,
  SelectChangeEvent,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Period } from "@/features/profile/types"
import {products} from "@/features/profile/constants.ts";

const ROWS_PER_PAGE = 5;

const PopularProductsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [period, setPeriod] = useState<Period>('This month');

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
    setPeriod(event.target.value as Period);
  };

  // Paginated slice
  const pagedProducts = products.slice(page * ROWS_PER_PAGE, page * ROWS_PER_PAGE + ROWS_PER_PAGE);

  return (
      <Card variant="outlined" sx={{ borderRadius: 3 }}>
        <CardContent>
          {/* Header */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Popular products</Typography>
            <Select
                value={period}
                onChange={handlePeriodChange}
                size="small"
                variant="standard"
                disableUnderline
                sx={{ fontSize: 14 }}
            >
              <MenuItem value="This month">This month</MenuItem>
              <MenuItem value="Last month">Last month</MenuItem>
            </Select>
          </Box>

          {/* Table */}
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Availability</TableCell>
                  <TableCell>Sell</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {pagedProducts.map(product => (
                    <TableRow key={product.id + product.image}>
                      <TableCell>{product.id}</TableCell>
                      <TableCell>
                        <Box display="flex" alignItems="center" gap={1}>
                          <Avatar src={product.image} variant="rounded" sx={{ width: 40, height: 40 }} />
                          <Typography
                              color={
                                product.availability === 'Out of stock' ? 'text.secondary' : 'text.primary'
                              }
                          >
                            {product.name}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {product.discount ? (
                            <Box display="flex" alignItems="center" gap={1}>
                              <Chip
                                  label={product.discount}
                                  size="small"
                                  sx={{ bgcolor: '#fcae92', color: '#fff', fontSize: 10, height: 20 }}
                              />
                              <Typography fontWeight="bold">${product.price}</Typography>
                              {product.oldPrice && (
                                  <Typography sx={{ textDecoration: 'line-through', color: 'grey.500' }}>
                                    ${product.oldPrice}
                                  </Typography>
                              )}
                            </Box>
                        ) : (
                            <Typography fontWeight="bold">${product.price}</Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <Chip
                            label={product.availability}
                            size="small"
                            sx={{
                              color: product.availability === 'In stock' ? 'green' : 'red',
                              border: `1px solid ${product.availability === 'In stock' ? 'green' : 'red'}`,
                              bgcolor: 'transparent',
                              fontSize: 12,
                              fontWeight: 500,
                            }}
                        />
                      </TableCell>
                      <TableCell>{product.sell}</TableCell>
                      <TableCell>
                        <IconButton size="small">
                          <VisibilityIcon fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Pagination */}
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Typography fontSize={12}>
              Showing {page * ROWS_PER_PAGE + 1}-{Math.min((page + 1) * ROWS_PER_PAGE, products.length)} of {products.length} entries
            </Typography>
            <TablePagination
                component="div"
                count={products.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={ROWS_PER_PAGE}
                rowsPerPageOptions={[]}
            />
          </Box>
        </CardContent>
      </Card>
  );
};

export default PopularProductsTable;
