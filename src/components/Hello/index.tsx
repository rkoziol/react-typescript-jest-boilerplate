import React, { useState } from 'react';

import { initialComponentProps } from '@components/Hello/handlers';
import { Hello } from '@components/Hello/Hello';

export default() => {
  const [componentProps, setComponentProps] = useState(initialComponentProps);

  return (<Hello {...componentProps} />);
};
