import styled from 'styled-components';
import { GRAY, HIGHLIGHT_COLOR, HIGHLIGHT_COLOR_DARKER, LIGHT_GRAY, SECONDARY_FONT_SIZE, MAIN_ELEMENT_FONT_SIZE, BASE_PADDING_UNIT, CARD_PADDING } from '../../../consts/styles';

export interface IOrderListItemStyledProps {
  isSelected: boolean;
}

export const OrderListItemStyled = styled.div`
  background: ${(props: IOrderListItemStyledProps) => props.isSelected ? HIGHLIGHT_COLOR : 'white'};
  padding: ${CARD_PADDING}px;
  border-bottom: 1px solid ${GRAY};

  &:hover {
    background: ${(props: IOrderListItemStyledProps) => props.isSelected ? HIGHLIGHT_COLOR_DARKER : LIGHT_GRAY};;
    cursor: pointer;
  }
`;

export const AddressStyled = styled.span`
  font-size: ${MAIN_ELEMENT_FONT_SIZE};
  margin-top: ${BASE_PADDING_UNIT}px;
  display: inline-block;
`;

export const DimensionsStyled = styled.span`
  font-size: ${SECONDARY_FONT_SIZE};
  color: gray;
  margin-top: ${BASE_PADDING_UNIT}px;
  display: inline-block;
`;
