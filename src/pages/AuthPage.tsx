import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
`;

const AppName = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: #000000;
  text-align: center;
  margin-bottom: 48px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 400px;
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: #000000;
  text-align: center;
`;

const Subtitle = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5em;
  color: #000000;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Field = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  outline: none;

  &::placeholder {
    color: #828282;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #e6e6e6;
  }

  span {
    padding: 0 8px;
    color: #828282;
    font-size: 16px;
    line-height: 1.5em;
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #eeeeee;
  color: #000000;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const GoogleIcon = styled.div`
  width: 18px;
  height: 18px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18'%3E%3Cpath fill='%234285F4' d='M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.615z'/%3E%3Cpath fill='%2334A853' d='M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z'/%3E%3Cpath fill='%23FBBC05' d='M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z'/%3E%3Cpath fill='%23EA4335' d='M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

const Terms = styled.p`
  font-size: 16px;
  line-height: 1.5em;
  color: #828282;
  text-align: center;
`;

const Link = styled.span`
  color: #000000;
  text-decoration: underline;
  cursor: pointer;
`;

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    // For now, just navigate to the home page
    if (email) {
      navigate("/");
    }
  };

  const handleGoogleSignIn = () => {
    // In a real app, you would handle Google authentication here
    navigate("/");
  };

  return (
    <PageContainer>
      <AppName>Music app</AppName>
      <Content>
        <Copy>
          <Title>Create an account</Title>
          <Subtitle>Enter your email to sign up for this app</Subtitle>
        </Copy>
        <Form as="form" onSubmit={handleSignUp}>
          <Field
            type="email"
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit">Sign up with email</Button>
        </Form>
        <Divider>
          <span>or continue with</span>
        </Divider>
        <GoogleButton type="button" onClick={handleGoogleSignIn}>
          <GoogleIcon />
          Google
        </GoogleButton>
        <Terms>
          By clicking continue, you agree to our <Link>Terms of Service</Link>{" "}
          and <Link>Privacy Policy</Link>
        </Terms>
      </Content>
    </PageContainer>
  );
};

export default AuthPage;
