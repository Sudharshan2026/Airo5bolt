import { motion } from 'framer-motion';

interface CTAButtonsProps {
    scrollToEvents: () => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ scrollToEvents }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
        >
            <button
                onClick={scrollToEvents}
                className="bg-gradient-to-r from-[#4079ff] to-[#40ffaa] hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6 shadow-[0_0_20px_#4079ff] animate-pulse"
                aria-label="Explore event details"
            >
                Explore Events
            </button>
            <button
                onClick={scrollToEvents}
                className="border-[#4079ff] text-[#4079ff] hover:bg-[#4079ff]/10 hover:scale-105 transform transition-all duration-300 text-lg px-8 py-6"
                aria-label="Learn more about the symposium"
            >
                Learn More
            </button>
        </motion.div>
    )
}

export default CTAButtons;
