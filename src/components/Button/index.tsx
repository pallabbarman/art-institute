import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'contained' | 'outlined' | 'text';
type ButtonColor = 'primary' | 'flame';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    loading?: boolean;
    fullWidth?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export default function Button({
    variant = 'contained',
    color = 'primary',
    size = 'md',
    loading = false,
    fullWidth = false,
    startIcon,
    endIcon,
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    const isDisabled = disabled || loading;

    const base =
        'rounded-md font-medium cursor-pointer ' +
        'transition-all duration-200 focus:outline-none focus-visible:ring-2 ' +
        'disabled:opacity-50 disabled:pointer-events-none';

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2 text-[0.95rem]',
        lg: 'px-7 py-3 text-base',
    };

    const variants = {
        contained: {
            primary:
                'bg-[var(--color-moonstone-600)] text-white ' +
                'hover:bg-[var(--color-moonstone-900)] ' +
                'focus-visible:ring-[var(--color-moonstone-200)]',
            flame:
                'bg-[var(--color-flame-600)] text-white ' +
                'hover:bg-[var(--color-flame-800)] ' +
                'focus-visible:ring-[var(--color-flame-200)]',
        },
        outlined: {
            primary:
                'border border-[var(--color-moonstone-600)] ' +
                'text-[var(--color-moonstone-600)] ' +
                'hover:bg-[var(--color-moonstone-100)] ' +
                'hover:text-[var(--color-moonstone-900)] ' +
                'hover:border-[var(--color-moonstone-900)] ' +
                'focus-visible:ring-[var(--color-moonstone-200)]',
            flame:
                'border border-[var(--color-flame-600)] ' +
                'text-[var(--color-flame-600)] ' +
                'hover:bg-[var(--color-flame-100)] ' +
                'hover:text-[var(--color-flame-800)] ' +
                'hover:border-[var(--color-flame-800)] ' +
                'focus-visible:ring-[var(--color-flame-200)]',
        },
        text: {
            primary:
                'text-[var(--color-moonstone-600)] px-3 ' +
                'hover:bg-[var(--color-moonstone-100)] ' +
                'hover:text-[var(--color-moonstone-900)] ' +
                'focus-visible:ring-[var(--color-moonstone-200)]',
            flame:
                'text-[var(--color-flame-600)] px-3 ' +
                'hover:bg-[var(--color-flame-100)] ' +
                'hover:text-[var(--color-flame-800)] ' +
                'focus-visible:ring-[var(--color-flame-200)]',
        },
    };

    return (
        <button
            disabled={isDisabled}
            className={clsx(
                base,
                sizes[size],
                variants[variant][color],
                fullWidth && 'w-full',
                className
            )}
            {...props}
        >
            {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            )}

            {!loading && startIcon && <span className="flex">{startIcon}</span>}

            <span>{children}</span>

            {!loading && endIcon && <span className="flex">{endIcon}</span>}
        </button>
    );
}
