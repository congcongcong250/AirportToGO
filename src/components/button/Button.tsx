import * as React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
}
class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children, disabled } = this.props;
    return (
      <StyledButton disabled={disabled} onClick={this.handleButtonOnClick}>
        {children}
      </StyledButton>
    );
  }

  private handleButtonOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick, disabled } = this.props;
    if (disabled) {
      return;
    }
    onClick && onClick(e);
  };
}

export default Button;
