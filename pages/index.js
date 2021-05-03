import Link from 'next/link'
export default function Home() {
  
   return (
    <div> 
    <section className="page-header">
      <h1 className="project-name">KR Genie</h1>
      <h2 className="project-tagline"></h2>
      <a href="https://discord.com/oauth2/authorize?client_id=834310297451233290&scope=bot&permissions=101440" className="btn">Invite</a>
      <Link href="/docs"><a className="btn">Docs</a></Link>
      
    </section>

    <section className="main-content">
      
      <footer className="site-footer">
        <span className="site-footer-owner"><a href="https://github.com/EJBEAN2op/Radial-Bot">KR Genie</a> is maintained by <a href="https://github.com/EJBEAN2op">Bunkerbots Team</a>.</span>
      </footer>

    </section>
    </div>
  )
}
