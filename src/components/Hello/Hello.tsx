import * as React from 'react';

import style from '@components/Hello/Hello.scss';

interface IHelloProps {
  foo: string;
  bar: string;
}

export const Hello = (props: IHelloProps) =>
  <div className={style.sample}>
    Hello from {props.foo} and {props.bar}!
  </div>;
