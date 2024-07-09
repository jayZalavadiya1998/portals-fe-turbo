import React from "react"
import { ColumnDef } from "@tanstack/react-table"
import { DataTableColumnHeader } from "../../../../../ui/src/components/data-table"

// import { DataTableRowActions } from "./data-table-row-actions"

export const notesColumns: ColumnDef<any>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//         className="translate-y-[2px]"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//         className="translate-y-[2px]"
//       />
//     ),
//     enableSorting: true,
//     enableHiding: false,
//   },
  {
    accessorKey: "subject_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Subject" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("subject_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "note_text",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Note" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("note_text")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "created_by_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("created_by_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "created_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created Date" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("created_date")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "updated_by_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated By" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("updated_by_name")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

  {
    accessorKey: "updated_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated Date" />
    ),
    cell: ({ row }) => <div className="w-[100px]">{row.getValue("updated_date")}</div>,
    enableSorting: true,
    enableHiding: false,
  },

]