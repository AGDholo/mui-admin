import {
  Box,
  Button,
  Checkbox,
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
  Typography,
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

function BasicTable() {
  return (
    <TableContainer component={Paper} elevation={0}>
      <Table aria-label="simple table">
        <TableBody>
          {[0, 1, 2, 3, 4].map((row) => (
            <TableRow
              key={row}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                '&:hover': {
                  boxShadow: 1,
                  cursor: 'pointer',
                },
              }}
              hover
            >
              <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox />
                Email title
                <Typography
                  variant="body2"
                  sx={{
                    ml: 2,
                  }}
                  color="textSecondary"
                >
                  The Overflow #117: New podcast hosts, the CEO on PagerDuty,
                  and horrible code on a deadline
                </Typography>
              </TableCell>
              <TableCell align="right">3/17</TableCell>
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
        <Grid item xs={12} md={5} lg={3} xl={2}>
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

        <Grid item xs={12} md={7} lg={9} xl={10}>
          <Paper
            variant="outlined"
            sx={{
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
