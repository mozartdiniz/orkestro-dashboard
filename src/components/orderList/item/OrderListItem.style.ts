import styled from 'styled-components';

export const OrderListItemStyled = styled.div`
  background: white;
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;

  &:hover {
    background: #e6e6e6;
    cursor: pointer;
  }
`;

export const AddressStyled = styled.span`
  font-size: 16px;
  margin-top: 5px;
  display: inline-block;
`;

export const DimensionsStyled = styled.span`
  font-size: 13px;
  color: gray;
  margin-top: 5px;
  display: inline-block;
`;
