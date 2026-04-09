'use client';

import React from 'react';
import { motion } from 'motion/react';

type BreadcrumbItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
  isLight?: boolean;
};

const Breadcrumbs = ({ items, className = '', isLight = false }: BreadcrumbsProps) => {
  return (
    <div className={`flex flex-row items-center gap-2 animate-[fade-right_0.8s] ${className} animate-[fade-right_0.8s]`.trim()}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemClassName = isLast
          ? isLight
            ? 'text-brand-black'
            : 'text-brand-white'
          : isLight
            ? 'text-[#999999] cursor-pointer hover:text-brand-black transition-colors'
            : 'text-[#999999] cursor-pointer hover:text-white transition-colors';

        const content = item.href ? (
          <a href={item.href} className={itemClassName}>
            {item.label}
          </a>
        ) : (
          <span className={itemClassName} onClick={item.onClick}>
            {item.label}
          </span>
        );

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {content}
            {!isLast ? <span className="text-[#999999]">/</span> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
