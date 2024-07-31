import * as React from 'react';

import './Hello.scss';

interface IHelloProps {
  foo: string;
  bar: string;
}

export const Hello = (props: IHelloProps): JSX.Element => (
  <div className="sample">
    Hello from {props.foo} and {props.bar}!
  </div>
);
