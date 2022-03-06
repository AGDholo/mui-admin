import { CallMadeOutlined } from '@mui/icons-material';

import {
  Card,
  CardContent,
  Grid,
  Icon,
  ThemeProvider,
  Typography,
} from '@mui/material';
import darkTheme from '../themes/dark.theme';

function Home() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <ThemeProvider theme={darkTheme}>
          <Card>
            <CardContent>
              <Typography variant="subtitle1" fontWeight="bold">
                Sales
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 4,
                  mb: 1,
                }}
              >
                $56500
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  display: 'flex',
                  alignContent: 'center',
                }}
              >
                <Icon>
                  <CallMadeOutlined fontSize="small" color="success" />
                </Icon>
                6.8% vs last week
              </Typography>

              <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 4 }}>
                Weekly Sales
              </Typography>

              <Typography variant="h4" sx={{ my: 1 }}>
                $1,837.32
              </Typography>
            </CardContent>
          </Card>
        </ThemeProvider>
      </Grid>

      <Grid item xs={12} md={6} lg={3} />
    </Grid>
  );
}

export default Home;
