/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import ThemeButton from './theme';

const Nav = () => (
    <header sx={{
        height: '60px', width: '100vw', bg: '#000', borderBottom: '1px solid', borderColor: 'highlight',
    }}
    >
        <nav sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%',
        }}
        >
            <Link href="/">
                <a sx={
                    {
                        fontWeight: 'bold', fontSize: 4, cursor: 'pointer', color: 'highlight',
                    }
                }
                >
                    Home
                </a>
            </Link>
            <ThemeButton />
        </nav>
    </header>
);

export default Nav;
