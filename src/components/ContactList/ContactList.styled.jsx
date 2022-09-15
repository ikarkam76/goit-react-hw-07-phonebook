import styled from "@emotion/styled";

export const List = styled.ul`
width: 400px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: #a4eef7;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.6);
  &:hover,
  &:focus {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const Contact = styled.div`
  text-align: left;
`

export const ContactName = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #79052d;
`;

export const ContactTel = styled.p`
  font-size: 16px;
  color: #79052d;
`;

export const DeleteButton = styled.button`
  width: 70px;
  border-radius: 50%;
  background-color: #b4607d;
  border: none;
  color: #fff;
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;


// rgba(233, 12, 89, 0.5);
// #2adff3;rgba(101, 167, 153, 0.5)