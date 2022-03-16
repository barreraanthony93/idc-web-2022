import React, { useState } from "react";
import Link from "next/link";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [onHover, setIsHover] = useState(false);
  return (
    <AnimatePresence>
      <div className="header">
        <motion.ul
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
          }}
        >
          <li
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <Link href="/">
              <img src={onHover ? "/fish-f.svg" : "/fish-e.svg"}  alt="IDCE" width="40px" />
            </Link>
          </li>
          <li>
            <a href="https://www.facebook.com/IDCElgin" rel="noreferrer" target="_blank">
              <FiFacebook size={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/c/RICARDOBARRERACATCH"
              target="_blank"
              rel="noreferrer" 
            >
              <FiYoutube size={20} />
            </a>
          </li>
        </motion.ul>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1.2,
          }}
        >
          <span>
            <strong>IDC </strong> Elgin, IL USA
          </span>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Header;
