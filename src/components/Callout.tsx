import { PropsWithChildren } from 'react';

interface CalloutProps extends PropsWithChildren {
  type?: 'info' | 'warn' | 'danger';
}

export const Callout = (props: CalloutProps) => {
  return <div>{props.children}</div>;
};
