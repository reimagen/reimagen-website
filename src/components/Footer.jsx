export default function Footer() {
  const socialColors = {
    github: 'hover:text-white',
    discord: 'hover:text-discord',
    twitter: 'hover:text-twitter',
    youtube: 'hover:text-youtube',
    instagram: 'hover:text-instagram',
    tiktok: 'hover:text-tiktok',
    linkedin: 'hover:text-linkedin',
  };

  return (
  <footer className="w-full bg-black/40 backdrop-blur text-white text-center text-sm p-4 border-t border-white/10 sticky bottom-0 z-50">
    <p className="text-sm uppercase tracking-[0.25em] text-brand-lavender">Get Connected:</p>
      <div className="flex justify-center items-center gap-4 mt-4">
        {/* GitHub */}
        <a
          href="https://github.com/reimagen"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.github}`}
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.41 9.41 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.89 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Discord */}
        <a
        href="https://discord.com/users/reimagenai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.discord}`}
        >
            <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.07.07 0 00-.073.035c-.21.375-.444.864-.608 1.248a18.116 18.116 0 00-5.434 0 12.51 12.51 0 00-.617-1.248.076.076 0 00-.073-.035 19.736 19.736 0 00-4.885 1.515.067.067 0 00-.03.027C2.356 9.057 1.65 13.578 2.06 18.057a.086.086 0 00.03.06 19.978 19.978 0 005.993 3.036.07.07 0 00.076-.024c.461-.63.873-1.295 1.226-1.99a.07.07 0 00-.038-.099 13.091 13.091 0 01-1.872-.888.07.07 0 01-.007-.117c.126-.094.252-.191.37-.29a.07.07 0 01.073-.01c3.927 1.792 8.18 1.792 12.061 0a.07.07 0 01.073.009c.12.099.244.196.37.29a.07.07 0 01-.006.117 12.665 12.665 0 01-1.872.888.07.07 0 00-.038.1c.36.693.772 1.358 1.225 1.99a.07.07 0 00.076.024 19.934 19.934 0 005.994-3.036.07.07 0 00.03-.06c.5-5.177-.84-9.655-3.549-13.661a.062.062 0 00-.031-.026zM8.02 15.331c-1.183 0-2.153-1.085-2.153-2.419 0-1.333.955-2.418 2.153-2.418 1.206 0 2.167 1.094 2.153 2.418 0 1.334-.955 2.419-2.153 2.419zm7.974 0c-1.183 0-2.153-1.085-2.153-2.419 0-1.333.955-2.418 2.153-2.418 1.206 0 2.167 1.094 2.153 2.418 0 1.334-.947 2.419-2.153 2.419z" />
        </svg>
        </a>

        {/* Twitter */}
        <a
        href="https://x.com/reimagenai"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter / X"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.twitter} block overflow-hidden`}
        >
            <path d="M13.586 10.79L20.546 3h-1.766l-5.93 6.689L8.453 3H3.5l7.293 10.354L3.5 21h1.766l6.326-7.123L15.547 21h4.953l-6.914-10.21zM14.68 14.7l-.737-1.09L6.519 4.5h1.527l6.016 8.894.738 1.091 7.604 11.115H20.88L14.68 14.7z" />
        </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@reimagenai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <svg
            className={`brand-social-icon ${socialColors.youtube}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
       
       
        {/* Instagram */}
        <a
        href="https://www.instagram.com/reimagenai/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.instagram}`}
        >
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
        </svg>
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@reimagenai"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.tiktok} self-center`}
        >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/lisagu1/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className={`brand-social-icon ${socialColors.linkedin}`}
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.938v5.669H9.354V9h3.414v1.561h.048c.476-.898 1.637-1.848 3.367-1.848 3.598 0 4.262 2.367 4.262 5.451v6.288zM5.337 7.433c-1.144 0-2.068-.926-2.068-2.067 0-1.143.924-2.068 2.068-2.068s2.067.925 2.067 2.068c0 1.141-.923 2.067-2.067 2.067zM6.814 20.452H3.861V9h2.953v11.452z" />
          </svg>
        </a>
      </div>
  <p className="mt-4 text-sm text-brand-lavender">© 2025 reImagen, Inc. All rights reserved.</p>

    </footer>
  );
}
