import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-[#4079ff] to-[#40ffaa] text-white rounded-full p-3 shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Go to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
