import { useCallback } from 'react';

/**
 * Hook that returns a formatting function.
 * Output format: 20-Mar-2024
 */
const useDateFormat = () => {
    const formatDate = useCallback(
        (dateInput: string | Date | number | null | undefined): string => {
            if (!dateInput) return '';

            try {
                const date = new Date(dateInput);

                // Check for invalid date
                if (isNaN(date.getTime())) {
                    return 'Invalid Date';
                }

                // Formatting options for "20-Mar-2024"
                const options: Intl.DateTimeFormatOptions = {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                };

                // Using 'en-GB' to get the Day-Month-Year order
                const formatter = new Intl.DateTimeFormat('en-GB', options);
                const parts = formatter.formatToParts(date);

                const day = parts.find((p) => p.type === 'day')?.value;
                const month = parts.find((p) => p.type === 'month')?.value;
                const year = parts.find((p) => p.type === 'year')?.value;

                return `${day}-${month}-${year}`;
            } catch (error) {
                console.error('Formatting error:', error);
                return '';
            }
        },
        []
    );

    return formatDate;
};

export default useDateFormat;
