/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <section className="page-header">
                <h1 className="project-name">KR Genie</h1>
                <div style={{ flex: 1 }}>
                    <Image src="/images/logo.png" alt="logo" height={240 / 2} width={207 / 2} />
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                        <Link href="https://discord.com/oauth2/authorize?client_id=834310297451233290&scope=bot&permissions=101440"><a className="btn">Invite</a></Link>
                        <Link href="/docs"><a className="btn">Docs</a></Link>
                        <Link href="https://github.com/BunkerBots/KR-Genie"><a className="btn">Source Code</a></Link>
                    </div>
                </div>
            </section>
            <section className="main-content">
                <footer className="site-footer">
                    <span className="site-footer-owner">
                        <a href="https://github.com/BunkerBots/KR-Genie">KR Genie</a> is maintained by  <a href="https://github.com/Bunkerbots">Bunkerbots Team</a>.
                    </span>
                </footer>
            </section>
        </div>
    );
}
