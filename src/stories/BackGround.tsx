import * as React from 'react';
import { COLORS } from '../utils/constants';

interface BackGroundProps {
  mode?: 'grey' | 'white';
}
class BackGround extends React.PureComponent<BackGroundProps> {
  public static defaultProps: Partial<BackGroundProps> = {
    mode: 'white'
  };

  render() {
    const { children, mode } = this.props;
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: mode === 'grey' ? COLORS.background : 'white',
          padding: 20,
          boxSizing: 'border-box'
        }}
      >
        {children}
      </div>
    );
  }
}

export default BackGround;
