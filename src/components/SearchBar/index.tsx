import type { ChangeEventHandler } from 'react';

export interface SearchBarProps {
    name: string;
    type?: 'text' | 'number';
    placeholder?: string;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({
    name,
    type = 'text',
    value,
    placeholder = 'Search...',
    onChange,
}: SearchBarProps) => {
    return (
        <div>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='focus:shadow-outline" w-full appearance-none rounded-md border-2 border-gray-300 px-3 py-2 pl-10 leading-tight text-gray-800 transition-colors hover:border-gray-400 focus:border-purple-600 focus:ring-purple-600 focus:outline-none'
            />
        </div>
    );
};

export default SearchBar;
