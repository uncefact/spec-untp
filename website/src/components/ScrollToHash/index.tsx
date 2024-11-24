import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const headerOffset = 85;
const timeout = 100;

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    // Handle initial load with hash
    if (hash) {
      // Small delay to ensure content is loaded
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          // Get header height and add some padding
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          // Scroll to the element
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, timeout);
    }
  }, [hash]);

  return null;
}

export default ScrollToHash;
