import { FC, useState } from "react";
import {
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
  SelectChangeEvent,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Period } from "@/features/profile/types";
import { products } from "@/features/profile/constants.ts";

const ROWS_PER_PAGE = 5;

const PopularProductsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [period, setPeriod] = useState<Period>("This month");

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handlePeriodChange = (event: SelectChangeEvent<Period>) => {
    setPeriod(event.target.value as Period);
  };

  const pagedProducts = products.slice(
    page * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE + ROWS_PER_PAGE
  );

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: 12,
        padding: 24,
        backgroundColor: "#fff",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h3
          style={{ margin: 0, font: 'normal 400 24px "PT Serif", sans-serif' }}
        >
          Popular products
        </h3>
        <Select
          value={period}
          onChange={handlePeriodChange}
          size="small"
          variant="standard"
          disableUnderline
          style={{ fontSize: 14 }}
        >
          <MenuItem value="This month">This month</MenuItem>
          <MenuItem value="Last month">Last month</MenuItem>
        </Select>
      </div>

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
            {pagedProducts.map((product) => (
              <TableRow key={product.id + product.image}>
                <TableCell>{product.id}</TableCell>
                <TableCell>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Avatar
                      src={product.image}
                      variant="rounded"
                      sx={{ width: 40, height: 40 }}
                    />
                    <span
                      style={{
                        color:
                          product.availability === "Out of stock"
                            ? "#888"
                            : "#000",
                      }}
                    >
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell>
                  {product.discount ? (
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          backgroundColor: "#fcae92",
                          color: "#fff",
                          fontSize: 10,
                          padding: "2px 6px",
                          borderRadius: 4,
                        }}
                      >
                        {product.discount}
                      </span>
                      <strong>${product.price}</strong>
                      {product.oldPrice && (
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "#aaa",
                            fontSize: 12,
                          }}
                        >
                          ${product.oldPrice}
                        </span>
                      )}
                    </div>
                  ) : (
                    <strong>${product.price}</strong>
                  )}
                </TableCell>
                <TableCell>
                  <span
                    style={{
                      border: `1px solid ${
                        product.availability === "In stock" ? "green" : "red"
                      }`,
                      color:
                        product.availability === "In stock" ? "green" : "red",
                      borderRadius: 8,
                      padding: "2px 8px",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    {product.availability}
                  </span>
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <span style={{ fontSize: 12 }}>
          Showing {page * ROWS_PER_PAGE + 1}-
          {Math.min((page + 1) * ROWS_PER_PAGE, products.length)} of{" "}
          {products.length} entries
        </span>
        <TablePagination
          component="div"
          count={products.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={ROWS_PER_PAGE}
          rowsPerPageOptions={[]}
        />
      </div>
    </div>
  );
};

export default PopularProductsTable;
