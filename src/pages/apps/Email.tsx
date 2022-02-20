import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import {
  DraftsOutlined,
  InboxOutlined,
  RestoreFromTrashOutlined,
  SendOutlined,
  StarOutlined,
} from '@mui/icons-material';

const listItemData = [
  {
    label: 'Inbox',
    secondary: '22',
    icon: <InboxOutlined />,
    selected: true,
  },
  {
    label: 'Sent',
    secondary: '',
    icon: <SendOutlined />,
  },
  {
    label: 'Drafts',
    secondary: '22',
    icon: <DraftsOutlined />,
  },
  {
    label: 'Starred',
    secondary: '22',
    icon: <StarOutlined />,
  },
  {
    label: 'Trash',
    secondary: '22',
    icon: <RestoreFromTrashOutlined />,
  },
];

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function BasicTable() {
  return (
    <TableContainer component={Paper} variant="outlined">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Email() {
  return (
    <Box sx={{ height: ' calc(100vh - 200px)' }}>
      <Grid spacing={2} container sx={{ height: '100%' }}>
        <Grid item xs={12} md={3} lg={2}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              height: '100%',
            }}
          >
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              disableElevation
            >
              New Email
            </Button>

            <List sx={{ mt: 2 }}>
              {listItemData.map((item) => (
                <ListItem
                  button
                  secondaryAction={item.secondary}
                  selected={item.selected}
                  key={item.label}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.label}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        <Grid item xs={12} md={9} lg={10}>
          <Paper
            variant="outlined"
            sx={{
              p: 2,
              height: '100%',
            }}
          >
            <BasicTable />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Email;
