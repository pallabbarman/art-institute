import { type ReactNode } from 'react';

export interface ChipProps {
    children: ReactNode;
}

const Chip = ({ children }: ChipProps) => {
    return (
        <div className="bg-moonstone-100 text-moonstone-900 rounded-lg px-2 py-1.5 text-sm font-semibold">
            {children}
        </div>
    );
};

export default Chip;
