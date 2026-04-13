import { type ReactNode } from 'react';

export interface ContainerProps {
    children: ReactNode;
    className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
    return <div className={`container mx-auto my-4 px-4 lg:my-8 ${className}`}>{children}</div>;
};

export default Container;
