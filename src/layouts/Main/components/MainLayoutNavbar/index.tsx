import { useState } from 'react';
import { Link } from 'react-router';
import routes from 'routes/index';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
];

const MainLayoutNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative bg-slate-800 px-6 py-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link to={routes.artworks.path} className="text-xl font-semibold text-white">
                    Art<span className="text-blue-400">Works</span>
                </Link>

                {/* Desktop links  */}
                <div className="hidden items-center gap-1 md:flex">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-100"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA + Hamburger */}
                <div className="flex items-center gap-3">
                    <a
                        href="/signup"
                        className="hidden rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 md:inline-block"
                    >
                        Get Started
                    </a>

                    {/* Hamburger button */}
                    <button
                        className="flex flex-col gap-1.5 p-1.5 text-slate-400 hover:text-slate-100 md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`block h-0.5 w-5 bg-current transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-current transition-opacity ${isOpen ? 'opacity-0' : ''}`}
                        />
                        <span
                            className={`block h-0.5 w-5 bg-current transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="mt-2 space-y-1 border-t border-slate-700 px-2 pt-3 pb-3 md:hidden">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="block rounded-md px-3 py-2.5 text-sm text-slate-400 transition-colors hover:bg-slate-700 hover:text-slate-100"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/signup"
                        className="mt-2 block rounded-md bg-blue-500 px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-600"
                    >
                        Get Started
                    </a>
                </div>
            )}
        </nav>
    );
};

export default MainLayoutNavbar;
