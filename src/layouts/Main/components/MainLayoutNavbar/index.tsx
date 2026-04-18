import Button from 'components/Button';
import Container from 'components/Container';
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
        <nav className="border-grey-200 sticky top-0 bg-white px-7">
            <Container className="my-0! py-6">
                <div className="flex items-center justify-between">
                    <Link to={routes.artworks.path}>
                        <h2>Artworks</h2>
                    </Link>

                    {/* Desktop nav links */}
                    <div className="hidden items-center gap-0.5 md:flex">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-body text-grey-800 hover:bg-moonstone-100 hover:text-moonstone-900 rounded-md px-3.5 py-2 text-sm font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <Button color="flame" className="hidden md:inline-flex">
                            Gallery
                        </Button>

                        {/* Hamburger */}
                        <button
                            className="flex flex-col gap-1.5 p-1.5 md:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <span
                                className={`bg-grey-800 block h-0.5 w-5 transition-transform ${isOpen ? 'translate-y-2 rotate-45' : ''}`}
                            />
                            <span
                                className={`bg-grey-800 block h-0.5 w-5 transition-opacity ${isOpen ? 'opacity-0' : ''}`}
                            />
                            <span
                                className={`bg-grey-800 block h-0.5 w-5 transition-transform ${isOpen ? '-translate-y-2 -rotate-45' : ''}`}
                            />
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile menu */}
            {isOpen && (
                <div className="border-grey-200 space-y-0.5 border-t px-3 pt-2 pb-4 shadow-[0_8px_20px_rgba(5,15,16,0.07)] md:hidden">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="font-body text-grey-800 hover:bg-moonstone-100 hover:text-moonstone-900 block rounded-md px-3 py-2.5 text-sm font-medium transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button color="flame">Gallery</Button>
                </div>
            )}
        </nav>
    );
};

export default MainLayoutNavbar;
