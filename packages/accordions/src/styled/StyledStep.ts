/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledContent } from './StyledContent';
import { StyledLine } from './StyledLine';
import { StyledDiv } from './StyledLabel';

const COMPONENT_ID = 'steppers.step';

export interface IStyledStep {
  isHorizontal?: boolean;
}

export const StyledStep = styled.div.attrs<IStyledStep>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledStep>`
  position: ${props => props.isHorizontal && 'relative'};
  min-width: ${props => props.isHorizontal && `${props.theme.space.base * 15}px`};

  &:last-of-type ${StyledLine} {
    display: ${props => props.theme.rtl && 'none'};
  }

  &:first-of-type ${StyledLine} {
    display: ${props => !props.theme.rtl && 'none'};
  }

  &:not(:last-of-type) ${StyledContent} {
    /* stylelint-disable-next-line property-no-unknown */
    border-${props => (props.theme.rtl ? 'right' : 'left')}: ${props => props.theme.borders.sm};
    border-color: ${props => getColor('neutralHue', 300, props.theme)};
  }

  ${StyledDiv} {
    background: #FFF; /* requires a background color via props / default props */
    width: 24px;
    padding-left: 4px;
    padding-right: 4px;
    margin: 0 auto;
  }

  &:first-of-type ${StyledDiv} {
    background: #FFF; /* requires a background color via props / default props */
    width: 24px;
    margin: 0;
    padding-left: 40%;
    padding-right: 4px;
  }

  &:last-of-type ${StyledDiv} {
    background: #FFF; /* requires a background color via props / default props */
    width: 24px;
    margin-right: 0;
    margin-left: auto;
    padding-left: 4px;
    padding-right: 40%;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledStep.defaultProps = {
  theme: DEFAULT_THEME
};
