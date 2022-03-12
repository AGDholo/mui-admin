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
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const { login } = useAuth();

  const handleSubmit = () => {
    login({
      email: '123',
      password: '123',
    });
  };

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

          <OutlinedInput
            fullWidth
            placeholder="Email"
            value="any@any.email"
            sx={{ my: 2, mt: 4 }}
          />
          <OutlinedInput
            value="any.password"
            fullWidth
            placeholder="Password"
          />
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            size="large"
            variant="contained"
            endIcon={<LoginOutlined />}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default Login;
