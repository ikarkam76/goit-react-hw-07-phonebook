import styled from '@emotion/styled';

export const Filter = styled.div`
  width: 400px;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  background-color: #a4eef7;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.6);
  &:hover,
  &:focus {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const FilterLabel = styled.label`
  font-weight: 500;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-bottom: 8px;
  color: #79052d;
`;
