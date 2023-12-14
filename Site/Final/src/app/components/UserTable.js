"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Pagination,
  Input,
} from "@nextui-org/react";
import React, { useState, useMemo, useCallback } from "react";
import { columns } from "../sistema/ocorrencias/[ocorrenciaId]/columns";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function UserTable({ users }) {
  const [fillterValue, setFilterValue] = useState("");
  const hasSearchFilter = fillterValue;

  const filteredItems = useMemo(() => {
    if (!hasSearchFilter) {
      return users;
    }

    return users.filter((user) =>
      user.tipo_ocorrencia.toLowerCase().includes(fillterValue.toLowerCase())
    );
  }, [users, hasSearchFilter, fillterValue]);

  const [page, setPage] = useState(1);
  const rowsPerPage = 15;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  });

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between gap-3">
          <Input
            iscClearable
            className="w-full sm:max-w"
            placeholder="Pesquisar"
            startContent={<FaSearch />}
            value={fillterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
        </div>
      </div>
    );
  }, [fillterValue, onSearchChange, onClear]);
  return (
    <Table
      className="text-neutral-800"
      aria-label="Example table with dynamic content"
      topContent={topContent}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[300px]",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            className="bg-primarySystemPage text-white"
            key={column.key}
          >
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items} emptyContent={"Sem Conteúdo"}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>
                {" "}
                <Link href={`/sistema/ocorrencia/${item.id}`}>
                  {getKeyValue(item, columnKey)}
                </Link>{" "}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
