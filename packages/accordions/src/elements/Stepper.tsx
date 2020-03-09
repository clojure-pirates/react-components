/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useEffect,
  forwardRef,
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import { StyledStepper } from '../styled';
import { StepperContext } from '../utils';
import { Step } from './components/Step';
import { StepLabel } from './components/StepLabel';
import { StepContent } from './components/StepContent';

interface IStaticStepperExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Step: typeof Step;
  Label: typeof StepLabel;
  Content: typeof StepContent;
}

interface IStepperProps extends HTMLAttributes<HTMLDivElement> {
  /** Used to show the current step and compute completed steps */
  activeIndex?: number;
  /** Displays the Stepper in a horizontal layout */
  isHorizontal?: boolean;
}

/**
 * Accepts all `<div>` attributes and events. Also accepts static properties:

 *  - `Stepper.Step`
 *  - `Stepper.StepLabel`
 *  - `Stepper.StepContent`
 */
// eslint-disable-next-line react/display-name
export const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
  ({ isHorizontal, activeIndex, ...props }, ref) => {
    const currentIndexRef = useRef(0);
    const stepperContext = {
      isHorizontal: isHorizontal!,
      activeIndex: activeIndex!,
      currentIndexRef
    };

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    return (
      <StepperContext.Provider value={stepperContext}>
        <div
          style={{
            position: 'relative'
          }}
        >
          <div
            style={{
              display: isHorizontal ? 'block' : 'none',
              height: '1px',
              borderTop: '1px solid rgb(216, 220, 222)',
              position: 'absolute',
              top: '12px',
              width: '100%'
            }}
            className="step-line"
          ></div>
          <StyledStepper ref={ref} isHorizontal={isHorizontal} {...props}>
            {props.children}
          </StyledStepper>
        </div>
      </StepperContext.Provider>
    );
  }
) as IStaticStepperExport<HTMLDivElement, IStepperProps>;

Stepper.Step = Step;
Stepper.Label = StepLabel;
Stepper.Content = StepContent;

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
  activeIndex: 0,
  isHorizontal: false
};
