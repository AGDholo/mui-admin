import { LoginOutlined } from '@mui/icons-material';
import {
  Card,
  CardContent,
  Box,
  Typography,
  OutlinedInput,
  CardActions,
  Button,
} from '@mui/material';

function Login() {
  return (
    <Box display="flex" justifyContent="center" mt={20}>
      <Card sx={{ maxWidth: '600px', width: '100%', p: 4 }}>
        <CardContent>
          <Typography
            align="center"
            variant="h4"
            component="p"
            sx={{ fontWeight: 'bold' }}
          >
            Welcome to Mui-Admin
          </Typography>

          <OutlinedInput fullWidth placeholder="Email" sx={{ my: 2, mt: 4 }} />
          <OutlinedInput fullWidth placeholder="Password" />
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button size="large" variant="contained" endIcon={<LoginOutlined />}>
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Login;
