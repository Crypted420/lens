import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Twitter, Mail } from "lucide-react";

function MobileNav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="h-full w-full flex flex-col justify-center items-center text-white space-y-8"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-10 right-10 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={24} />
            </motion.button>

            <nav className="flex flex-col items-center space-y-6">
              {["Work", "About", "Services", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-2xl hover:text-gray-300 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-8 mt-12"
            >
              {[
                { icon: Instagram, href: "https://instagram.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Mail, href: "mailto:hello@lenscraft.com" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
