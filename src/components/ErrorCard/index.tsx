import Container from 'components/Container';
import type { ReactNode } from 'react';

export interface ErrorCardProps {
    children: ReactNode;
}

const ErrorCard = ({ children }: ErrorCardProps) => {
    return (
        <Container>
            <div className="border-grey-200 my-4 rounded-md border p-10 shadow-sm">
                <p className="text-flame-600">{children}</p>
            </div>
        </Container>
    );
};

export default ErrorCard;
