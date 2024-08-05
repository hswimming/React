import React from "react";
import { signin } from "login/service/ApiService";
import { Button, Container, Grid, TextField, Typography } from "@mui/material"; // bootstrap button 아님

function Login() {
  const handleSubmit = (event) => {
    // form에 있는 onSubmit => default 이벤트
    // default 이벤트 취소 => 페이지가 바뀌면 안됨 (onSubmit 사용하기 위함)
    event.preventDefault();

    const data = new FormData(event.target);
    const username = data.get("username");
    const password = data.get("password");
    console.log({ username: username, password: password });

    // ApiService의 signin 메서드를 사용 해 로그인 (오브젝트로 data 보냄)
    signin({ mid: username, mpassword: password });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
      </Grid>
      {/* form 안에 submit 있으면 onSubmit 수행 후 submit */}
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="username"
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="패스워드"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              로그인
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Login;