import * as React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
class Button extends React.PureComponent<ButtonProps> {
  render() {
    const { children } = this.props;
    return <StyledButton onClick={this.handleButtonOnClick}>{children}</StyledButton>;
  }

  private handleButtonOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick } = this.props;
    onClick && onClick(e);
  };
}

export default Button;
