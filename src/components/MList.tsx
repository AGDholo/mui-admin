import {
  DeleteOutlined,
  CheckCircleOutlined,
  RefreshOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { TransitionGroup } from 'react-transition-group';
import MExample from './Base/MExample';

export function MNotice() {
  const [fakeNoticeList, setFakeNoticeList] = useState([1, 2, 3, 4, 5]);

  // read function
  const handleRead = (item: number) => {
    setFakeNoticeList(fakeNoticeList.filter((index: number) => index !== item));
  };

  const handleAllRead = () => {
    setFakeNoticeList([]);
  };

  const handleRefresh = () => {
    setFakeNoticeList([1, 2, 3, 4, 5]);
  };

  return (
    <Box>
      <ListItem
        secondaryAction={
          <IconButton edge="end" onClick={handleRefresh}>
            <RefreshOutlined />
          </IconButton>
        }
      >
        <ListItemText>
          <Typography variant="h6" fontWeight="bold">
            Notifications
          </Typography>
        </ListItemText>
      </ListItem>

      <Divider />

      <List dense>
        {fakeNoticeList.length > 0 ? (
          <>
            <TransitionGroup>
              {fakeNoticeList.map((item) => (
                <Collapse key={item}>
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" onClick={() => handleRead(item)}>
                        <DeleteOutlined />
                      </IconButton>
                    }
                  >
                    <ListItemText
                      primary={`Notice ${item}`}
                      secondary="List Secondary"
                    />
                  </ListItem>

                  <Divider />
                </Collapse>
              ))}
            </TransitionGroup>

            <Box textAlign="center" mt={2}>
              <Button onClick={handleAllRead}>All Read</Button>
            </Box>
          </>
        ) : (
          <Box textAlign="center">
            <CheckCircleOutlined fontSize="large" />
          </Box>
        )}
      </List>
    </Box>
  );
}

function MList() {
  return (
    <Box>
      <Box sx={{ mx: 'auto', maxWidth: '1200px' }}>
        <MExample title="Notice">
          <MNotice />
        </MExample>
      </Box>
    </Box>
  );
}

export default MList;
