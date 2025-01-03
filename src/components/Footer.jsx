import {
  FaTwitter,
  FaTelegram,
  FaGithub,
  FaBook,
  FaCode,
  FaLink,
  FaDatabase,
  FaCloudDownloadAlt,
  FaWallet,
} from "react-icons/fa";
import { SiGitbook, SiWebmoney } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    {
      title: "Home",
      url: "/",
      icon: <FaLink className="mr-2" />,
    },
    {
      title: "About",
      url: "#about",
      icon: <FaBook className="mr-2" />,
    },
    {
      title: "Ecosystem",
      url: "https://docs.solverse.network/",
      icon: <FaDatabase className="mr-2" />,
    },
    {
      title: "Marketplace",
      url: "https://docs.solverse.network/introduction/core-features",
      icon: <FaWallet className="mr-2" />,
    },
  ];

  const featureLinks = [
    {
      title: "Online Travel",
      url: "https://docs.solverse.network/introduction/core-features",
      icon: <FaBook className="mr-2" />,
    },
    {
      title: "Digital Clothing",
      url: "https://docs.solverse.network/introduction/core-features",
      icon: <FaCode className="mr-2" />,
    },
    {
      title: "Artworks",
      url: "https://docs.solverse.network/introduction/core-features",
      icon: <FaCloudDownloadAlt className="mr-2" />,
    },
    {
      title: "VR Connect",
      url: "https://docs.solverse.network/introduction/core-features",
      icon: <FaGithub className="mr-2" />,
    },
  ];

  const webLinks = [
    {
      title: "Whitepaper",
      url: "https://docs.solverse.network/",
      icon: <SiWebmoney className="mr-2" />,
    },
    {
      title: "Roadmap",
      url: "https://docs.solverse.network/ecosystem/roadmap",
      icon: <FaBook className="mr-2" />,
    },
    {
      title: "Tokenomics",
      url: "https://docs.solverse.network/ecosystem/tokenomics",
      icon: <FaDatabase className="mr-2" />,
    },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      url: "https://x.com/solverse_net?s=21",
      icon: <FaTwitter />,
      color: "text-[#fff]",
    },
    {
      name: "Telegram",
      url: "https://t.me/Solverse_network",
      icon: <FaTelegram />,
      color: "text-[#fff]",
    },
    {
      name: "Gitbook",
      url: "https://docs.solverse.network/",
      icon: <SiGitbook />,
      color: "text-white",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-purple to-indigo-900 text-white py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-1">
            <img src="/logo.png" alt="Solverse Logo" className="w-12 h-12" />
            <h2 className="text-xl md:text-3xl font-bold text-gradient font-orb">
              SOLVERSE
            </h2>
          </div>
          <p className="text-xs md:text-sm text-gray-300 max-w-xs">
            Revolutionizing decentralized experiences at the intersection of
            Solana and the Metaverse. Building the future, one block at a time.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${social.color}
                  text-2xl
                  hover:scale-110
                  transition-transform
                  hover:opacity-80
                `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm md:text-lg font-semibold mb-6 text-white font-orb">
            Quick Links
          </h3>
          <ul className="space-y-4">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="flex items-center md:text-base text-xs text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Developer Resources */}
        <div>
          <h3 className="text-sm md:text-lg font-semibold mb-6 text-white font-orb">
            Explore
          </h3>
          <ul className="space-y-4">
            {featureLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="flex items-center md:text-base text-xs text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Web3 Resources */}
        <div>
          <h3 className="text-sm md:text-lg font-semibold mb-6 text-white font-orb">
            Web3 Resources
          </h3>
          <ul className="space-y-4">
            {webLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="flex items-center md:text-base text-xs text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-gray-800 text-center relative">
        <p className="text-[0.7rem]  text-gray-400">
          © {currentYear} Solverse. All Rights Reserved.
          <span className="ml-4">Powered by Solana</span>
        </p>

        {/* Legal Links */}
        <div className="mt-4 flex justify-center space-x-4 text-[0.7rem] text-gray-500">
          <a
            href="https://docs.solverse.network/legal/privacy-policy"
            className="hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="https://docs.solverse.network/legal/term-of-use"
            className="hover:text-white"
          >
            Terms of Service
          </a>
          <a
            href="https://docs.solverse.network/legal/privacy-policy"
            className="hover:text-white"
          >
            Cookie Policy
          </a>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;
