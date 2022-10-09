import styled from 'styled-components';

import { FormStyles } from 'components/Form/Form.styled';

export const FindContact = FormStyles.withComponent('div');

export const DeleteBtn = styled.button`
  border: 0;
  padding: 7px;
  border-radius: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Contact = styled.li`
  :not(:last-child) {
    margin-bottom: 7px;
  }
`;