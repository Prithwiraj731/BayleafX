import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon?: string;
  title: string;
  subtitle: string;
  description?: string;
}

export interface ServicePillar {
  name: string;
  services: ServiceItem[];
}

export interface MetricItem {
  value: number;
  suffix?: string;
  label: string;
}

export interface DifferentiatorItem {
  dimension: string;
  others: string;
  ours: string;
}

export interface ProcessStepItem {
  number: number;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  title: string;
  company: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export interface SectionHeaderProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'onClick'> {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}
