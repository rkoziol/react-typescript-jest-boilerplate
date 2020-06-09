import * as React from 'react';

import style from './Hello.scss';

interface IHelloProps {
  foo: string;
  bar: string;
}

export const Hello = (props: IHelloProps): JSX.Element => (
  <div className={style.sample}>
    Hello from {props.foo} and {props.bar}!
  </div>
);
