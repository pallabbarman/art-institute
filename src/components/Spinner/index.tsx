export interface SpinnerProps {
    size?: 'small' | 'large';
}

const Spinner = ({ size = 'large' }: SpinnerProps) => {
    let spinnerSize;
    switch (size) {
        case 'small':
            spinnerSize = 'w-8 h-8 border-4';
            break;
        case 'large':
        default:
            spinnerSize = 'w-16 h-16 border-6';
            break;
    }

    return (
        <div
            className={`border-flame-600 border-t-flame-200 animate-spin rounded-full ${spinnerSize}`}
        />
    );
};

export default Spinner;
