import React from 'react';

interface LinkProps {
  className?: string;
  href: string;
  children?: React.ReactNode;
}

const Link = (props: LinkProps) => {
  const { className, href, children } = props;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
