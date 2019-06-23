import styled from 'styled-components';

export interface IOrderListItemStyledProps {
  isSelected: boolean;
}

export const OrderListItemStyled = styled.div`
  background: ${(props: IOrderListItemStyledProps) => props.isSelected ? '#ddf2fb' : 'white'};
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;

  &:hover {
    background: ${(props: IOrderListItemStyledProps) => props.isSelected ? '#c3dfea' : '#f9f9f9'};;
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
