import React from 'react';
import { Button } from '@mui/material';
import { useFormikContext } from 'formik';
import { styled} from '@mui/styles';


const StyledButton = styled(Button)({
  background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(162,222,131,1) 100%)",
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(2, 212, 225, .3)',
  color: 'white',
  width: 100,
  padding: 5,
});

const SubmitButton = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    onClick: handleSubmit
  }

  return (
    <StyledButton
      {...configButton}
    >
      {children}
    </StyledButton>
  );
};

export default SubmitButton;