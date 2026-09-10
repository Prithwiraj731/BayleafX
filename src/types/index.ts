import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string; // Lucide icon name or LucideIcon component reference
  title: string;
  subtitle: string;
  description: string;
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
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
  glow?: boolean;
}

export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description?: string;
  index?: number;
  className?: string;
}

export interface MetricCardProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
}

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  className?: string;
}
