/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsx jsx */ /** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = () => (
    <header sx={{
        height: '60px', width: '100vw', bg: 'primary', borderBottom: '1px solid', borderColor: 'primary',
    }}
    >
        <nav sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%',
        }}
        >
            <Link href="/">
                <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>Home</a>
            </Link>

        </nav>
    </header>
);

export default Nav;
