import { CallMadeOutlined } from '@mui/icons-material';
import Chart from 'react-apexcharts';

import {
  Box,
  Card,
  CardContent,
  Grid,
  Icon,
  ThemeProvider,
  Typography,
} from '@mui/material';
import React from 'react';
import { blue } from '@mui/material/colors';
import darkTheme from '../themes/dark.theme';

function DemoChart() {
  const state = {
    options: {
      stroke: {
        curve: 'smooth',
      },
      colors: [blue[500], blue[400]],
      tooltip: {
        enabled: false,
      },
      grid: {
        show: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        id: 'basic-bar',
        dropShadow: {
          enabled: true,
          top: 1,
          left: 2,
          blur: 3,
          color: '#000',
          opacity: 0.35,
        },
      },
      fill: {
        type: 'gradient',
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    },

    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  };

  return (
    <Box height="100px" width="100%">
      <Chart
        options={state.options as any}
        series={state.series}
        type="line"
        width="100%"
        height="100%"
      />
    </Box>
  );
}

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
            <DemoChart />
          </Card>
        </ThemeProvider>
      </Grid>

      <Grid item xs={12} md={6} lg={3} />
    </Grid>
  );
}

export default Home;
