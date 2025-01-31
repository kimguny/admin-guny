"use client";

import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useLoginMutation from "@/hooks/mutation/useLoginMutation";

type LoginFormInputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup.string().email("유효한 이메일을 입력하세요").required("이메일은 필수입니다"),
  password: yup.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다").required("비밀번호는 필수입니다"),
});

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (data: LoginFormInputs) => {
    mutate({
      user_id: data.email,
      password: data.password,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ display: "flex", flexDirection: "column", gap: 2, width: 300, background: "white", padding: 3, borderRadius: 2, boxShadow: 1 }}
        >
          <Typography variant="h5" textAlign="center">
            로그인
          </Typography>
          <TextField label="이메일" {...register("email")} error={!!errors.email} helperText={errors.email?.message} fullWidth />
          <TextField label="비밀번호" type="password" {...register("password")} error={!!errors.password} helperText={errors.password?.message} fullWidth />
          <Button type="submit" variant="contained" color="primary" disabled={isPending}>
            {isPending ? "로그인 중..." : "로그인"}
          </Button>
        </Box>
      </Box>
    </>
  );
}
