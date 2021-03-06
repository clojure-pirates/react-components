/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledTag, StyledAvatar } from '../styled';
import Close from './Close';

interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'small' | 'medium' | 'large';
  hue?:
    | 'grey'
    | 'blue'
    | 'kale'
    | 'red'
    | 'green'
    | 'yellow'
    | 'fuschia'
    | 'pink'
    | 'crimson'
    | 'orange'
    | 'lemon'
    | 'lime'
    | 'mint'
    | 'teal'
    | 'azure'
    | 'royal'
    | 'purple';
  isPill?: boolean;
  isRound?: boolean;
}

/**
 * Accepts all `<div>` attributes and events.
 *
 * **Accessibility warning:** the `Tag.Close` component includes a default
 * English `aria-label`. If you are localizing your application you must
 * overwrite this property with your own translation.
 */
const Tag = React.forwardRef<HTMLDivElement, ITagProps>(({ size, hue, ...otherProps }, ref) => (
  <StyledTag ref={ref} size={size} hue={hue} {...otherProps} />
));

Tag.displayName = 'Tag';

Tag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  hue: PropTypes.oneOf([
    'grey',
    'blue',
    'kale',
    'red',
    'green',
    'yellow',
    'fuschia',
    'pink',
    'crimson',
    'orange',
    'lemon',
    'lime',
    'mint',
    'teal',
    'azure',
    'royal',
    'purple'
  ]),
  isPill: PropTypes.bool,
  isRound: PropTypes.bool
};

Tag.defaultProps = {
  size: 'medium'
};

(Tag as any).Avatar = StyledAvatar;
(Tag as any).Close = Close;

/** @component */
export default Tag as React.ForwardRefExoticComponent<
  ITagProps & React.RefAttributes<HTMLDivElement>
> & {
  Avatar: typeof StyledAvatar;
  Close: typeof Close;
};
