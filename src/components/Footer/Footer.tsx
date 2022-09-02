import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

type FooterProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer className={className} {...props}>
      <span>
        <a href="https://github.com/vadmitriev/" target="_new" rel="follow">
          Владимир Дмитриев
        </a>
      </span>
    </footer>
  );
};

export default Footer;
