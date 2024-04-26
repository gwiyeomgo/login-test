import styled from '@emotion/styled';

import colors from '../constants/colors';

const BigInput = styled.input<{ hasError?: boolean }>`
  width: 100%;
  color: ${colors.grey800};
  padding: 0 0 8px;
  color: ${colors.grey900};
  height: 42px;
  font-weight: 500;
  font-size: 24px;
  border-radius: 1px;
  caret-color: ${colors.blue400};
  outline: none;
  border: 0 none;
  border-bottom: 2px solid ${colors.grey300};
  :focus {
    border-bottom-color: ${colors.blue400};
  }
  ${({ hasError }) => (hasError ? errorStyle : '')}
  transition: background-color 0.2s ease;
`;

const errorStyle = `
  color: ${colors.red500};
  border-bottom-color: ${colors.red500};
  :focus { border-bottom-color: ${colors.red500}; }
`;

export default BigInput;
