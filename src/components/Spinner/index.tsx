export interface SpinnerProps {
    size?: 'small' | 'large';
    color?: 'primary' | 'secondary';
}

const Spinner = ({ size = 'small', color = 'primary' }: SpinnerProps) => {
    let spinnerSizeClass;
    let spinnerColorClass;
    switch (size) {
        case 'small':
            spinnerSizeClass = 'w-10 h-10 border-4';
            break;
        case 'large':
        default:
            spinnerSizeClass = 'w-16 h-16 border-6';
            break;
    }

    switch (color) {
        case 'primary':
            spinnerColorClass = 'border-moonstone-600 border-t-moonstone-200';
            break;
        case 'secondary':
        default:
            spinnerColorClass = 'border-flame-600 border-t-flame-200';
            break;
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <div className={`${spinnerColorClass} animate-spin rounded-full ${spinnerSizeClass}`} />
        </div>
    );
};

export default Spinner;
