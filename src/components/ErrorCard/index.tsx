import type { ReactNode } from 'react';

export interface ErrorCardProps {
    children: ReactNode;
}

const ErrorCard = ({ children }: ErrorCardProps) => {
    return (
        <div className="border-grey-200 rounded-md border p-10 shadow-sm">
            <p className="text-flame-600">{children}</p>
        </div>
    );
};

export default ErrorCard;
