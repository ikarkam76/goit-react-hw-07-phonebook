import styled from "@emotion/styled";

export const FormContainer = styled.div`
  width: 390px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 5px;
  border-radius: 5px;
  background-color: #a4eef7;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.6);
  &:hover,
  &:focus {
    transform: scale(1.05);
    transition-duration: 100ms;
    cursor: pointer;
  }
`;

export const FormLabel = styled.label`
  font-weight: 500;
  font-size: 22px;
  color: #79052d;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const FormButton = styled.button`
  margin-top: 10px;
  width: 80px;
  padding: 15px;
  border-radius: 50%;
  background-color: #b4607d;
  border: none;
  color: #fff;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
  &:hover,
  &:focus {
    transform: scale(1.05);
    transition-duration: 100ms;
    cursor: pointer;
  }
`;

