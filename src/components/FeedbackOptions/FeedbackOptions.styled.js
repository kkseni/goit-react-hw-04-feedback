import styled from '@emotion/styled';

export const SectionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 250px;
`;

export const ButtonEl = styled.button`
  border-radius: 20px;
  border: 1px solid teal;
  width: 180px;
  height: 35px;
  margin-right: 10px;
  cursor: pointer;
  :hover {
    background-color: #6d6db2;
  }
`;
