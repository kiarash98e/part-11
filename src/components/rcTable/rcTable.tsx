/* eslint-disable @typescript-eslint/no-redeclare */
import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { ITask } from '../../context/todos/todosFn';
import moment from 'jalali-moment';
import IconButton from '@mui/material/IconButton';
import { IoTrashOutline, IoCreateOutline } from 'react-icons/io5'
import { useUI } from '../../context/uiContext';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
  ) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array: ITask[], comparator: (a: any, b: any) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [ITask, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof ITask;
  label: string;
  numeric: boolean;
  type?: 'string' | 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency'
  dateSetting?: { locale?: string; format?: string };
}



interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof ITask) => void;
  order: Order;
  orderBy: string;
  headCells : any | HeadCell[];
  toggle?:boolean;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort, headCells,toggle } = props;
  const createSortHandler =
    (property: keyof ITask) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead 
      sx={{
        bgcolor: toggle ? "white" : "#212121",
        }}
    >
      <TableRow>

        {headCells.map((headCell:any) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            
          >
            <TableSortLabel
              sx={{p:2,color: toggle ? "#212121" : "white",
              }}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


interface RcTable {
  data:any
  headCells:any | HeadCell[]
  toggle:boolean
  isEmpty?:boolean
  count?: number
}


export const RcTable:React.FC<RcTable> = ({data,headCells,toggle,isEmpty,count=0}) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof ITask>('task');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const { openModal,setModalView,setModalData } = useUI()

  const handleDelete = (item:any) => {
    setModalView("Delete")
    setModalData({ item:item })
    return openModal()
  }

  const handleEdit = (item:any) => {
    setModalView("Edit")
    setModalData({ item:item })
    return openModal()
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof ITask,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 4, pt: 5, px: 3, }}>
        <TableContainer sx={{ width:"100%",pl:2, bgcolor: toggle ? "white" : "#212121" }}>
          <Table
            sx={{ minWidth: 650, p:2, pt:4 }}
            aria-labelledby="tableTitle"
           
          >
            <EnhancedTableHead
              toggle={toggle}
              order={order}
              orderBy={orderBy}
              headCells={headCells}
              onRequestSort={handleRequestSort}
            />
            <TableBody
 
            >
              {
                isEmpty ? (
                  <TableRow
                    style={{
                      height: 40,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding:1,
                      width:"100%",
                    }}
                    
                  >
                    <TableCell colSpan={12} sx={{
                      color:toggle ? "#212121" : "white",
                      mb: 3,
                      border: 0,
                    }}>
                        Can't Find Todos
                    </TableCell>
                  </TableRow>
                ):(
                  
                  stableSort(data, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
    
                      const convertedDeadline = moment(item!.deadline)
                        .locale("fa")
                        .format("YYYY/MM/DD")
                      
                      return (
                        <TableRow
                          hover
                          tabIndex={-1}
                          key={item!.id}
                          
                        >
    
                          <TableCell
                            component="th"
    
                            scope="row"
                            sx={{
                              p:2,
                              border:0,
                              color: toggle ? "#212121" : "white"
                            }}
                          >
                            {item!.task}
                          </TableCell>
                          <TableCell
                            sx={{
                              p:2,
                              border:0,
                            }} align="justify">
                              <span
                                style={{
                                  backgroundColor: item!.status === "todo" ? "plum" :
                                  item!.status === "done" ? "#2eac11" :
                                  item!.status === "doing" ? "blueviolet" : "transparent" ,
                                  padding:"5px 15px 5px 15px",
                                  borderRadius:"25px",
                                  color: item!.status === "status" ? 
                                    toggle ? "#212121" : "white" : "white"

                                }}
                              >
                                {item!.status}
                              </span>
                            </TableCell>
                          <TableCell
                            sx={{
                              p:2,
                              border:0,
                              color: toggle ? "#212121" : "white"
                            }} align="justify">
                                <span
                                style={{
                                  backgroundColor: item!.priority === "high" ? "coral" :
                                  item!.priority === "medium" ? "darkorange" :
                                  item!.priority === "low" ? "sienna" : "transparent" ,
                                  padding:"5px 15px 5px 15px",
                                  borderRadius:"25px",
                                  color: item!.priority === "priority" ? 
                                    toggle ? "#212121" : "white" : "white"

                                }}
                              >
                                {item!.priority}
                              </span>
                            </TableCell>
                          <TableCell
                            sx={{
                              p:2,
                              border:0,
                              color: toggle ? "#212121" : "white"
                            }} align="justify">{convertedDeadline}</TableCell>
                          <TableCell
                            sx={{
                              p:2,
                              border:0,
                              color: toggle ? "#212121" : "white"
                            }} align="justify">{<>
                              <IconButton onClick={() => handleDelete(item)}>
                                <IoTrashOutline />
                              </IconButton>
    
                            </>} {
                              <>
                                <IconButton onClick={() => handleEdit(item)}>
                                  <IoCreateOutline />
                                </IconButton>
                              </>
                            }</TableCell>
                        </TableRow>
                      );
                    })
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
        { count > 5 ? 
          <TablePagination
            sx={{
              bgcolor:"white",
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={count}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> : null
      }
      </Paper>
    </Box>
  );
}
