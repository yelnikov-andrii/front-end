import React from 'react';
import styled from 'styled-components';
import { FormLink } from '../../UI/FormLink';

const Forgot = styled.p`
text-align: left;
justify-self: flex-start;
margin: 16px 0 4px 0;
color: #2149C1;
font-weight: 600;
`;

const CreateAccount = styled.p`
color: #4E4B66;
margin: 0 0 35px 0;
`;

export const ForgotPassword = () => {
  return (
    <>
      <Forgot>
        Forgot password?
      </Forgot>
      <CreateAccount>
        <span>Don’t have an account?</span>
        <FormLink
          href="/registration"
          color="#2149C1"
        >
          Create account
        </FormLink>
      </CreateAccount>
    </>
  );
};
