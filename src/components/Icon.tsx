import type { SVGProps } from 'react';

type IconName = 'arrow-down' | 'arrow-up' | 'arrow-right' | 'external' | 'menu' | 'close';

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

const paths: Record<IconName, string> = {
  'arrow-down': 'M12 4v16m-6-6 6 6 6-6',
  'arrow-up': 'M12 20V4m-6 6 6-6 6 6',
  'arrow-right': 'M4 12h16m-6-6 6 6-6 6',
  external: 'M7 17 17 7M7 7h10v10',
  menu: 'M4 8h16M4 16h16',
  close: 'm6 6 12 12M6 18 18 6',
};

export function Icon({ name, className = '', ...props }: IconProps) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true" focusable="false" {...props}>
      <path d={paths[name]} />
    </svg>
  );
}

export function StarMark({ className = '' }: { className?: string }) {
  return (
    <svg className={`star-mark ${className}`} viewBox="0 0 40 40" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="m20 2 4.9 12.2 13.1.9-10.1 8.4L31 36.3 20 29.1 9 36.3l3.1-12.8L2 15.1l13.1-.9L20 2Z" />
    </svg>
  );
}
