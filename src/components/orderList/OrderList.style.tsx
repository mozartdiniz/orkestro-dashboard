import styled from 'styled-components';

export const OrderListWrapper = styled.div`
  width: 300px;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background: #f5f5f5;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.3);
`;

export const OrderListItem = styled.div`
  background: white;
  padding: 20px;
  border-bottom: 1px solid #e8e8e8;
`;
