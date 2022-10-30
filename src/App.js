import React from 'react';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  return (
      <Container component="main" maxWidth="xs">
        <Box
            sx={{
              marginTop: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            이메일 로그인
          </Typography>

          <TextField
              margin="normal"
              label="이메일 주소"
              fullWidth
              name="email"
              autoComplete="email"
              // autoFocus
          />

          <TextField label="비밀번호" type="password" fullWidth name="password" />

          <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="로그인 상태 유지하기"
          />

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
          >
            로그인
          </Button>

          <Grid container>
            <Grid item xs>
              <Link>비밀번호 찾기</Link>
            </Grid>
            <Grid item>
              <Link>회원가입</Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
  );
}

export default App;