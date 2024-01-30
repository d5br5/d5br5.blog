import { PropsWithChildren } from 'react';

import * as Icon from './Icons';
import { cn } from '@/lib/utils';

type CalloutType = 'info' | 'warn' | 'danger' | 'normal';

interface CalloutProps extends PropsWithChildren {
  type?: CalloutType;
  title?: string;
}

interface IconType {
  [key: string]: {
    icon: () => JSX.Element;
    boxClass: string;
  };
}

const metadata: IconType = {
  info: {
    icon: Icon.Info,
    boxClass: 'text-informative-foreground bg-informative',
  },
  danger: {
    icon: Icon.Danger,
    boxClass: 'text-destructive-foreground bg-destructive',
  },
  warn: {
    icon: Icon.Warn,
    boxClass: 'text-warning-foreground bg-warning',
  },

  normal: {
    icon: Icon.Normal,
    boxClass: 'text-secondary-foreground bg-secondary',
  },
};

export const Callout = (props: CalloutProps) => {
  const metaObj = metadata[props.type || 'normal'];
  const Icon = metaObj.icon;
  const boxClassName = metaObj.boxClass;

  return (
    <div className={cn('flex items-center my-6 px-5 py-4 gap-3 rounded-md', boxClassName)}>
      <div>
        <Icon />
      </div>
      <div className='callout-contents flex-1'>
        {props.title && <span style={{ fontWeight: 'bold' }}>{props.title}</span>}
        {props.children}
      </div>
    </div>
  );
};
