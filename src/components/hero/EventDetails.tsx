import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

const eventDetails = [
    {
      icon: Calendar,
      label: "Date",
      value: "8th August 2025"
    },
    {
      icon: MapPin,
      label: "Venue",
      value: "Sri Sairam Engineering College"
    },
    {
      icon: Users,
      label: "Level",
      value: "National Level"
    },
    {
      icon: Award,
      label: "Department",
      value: "AI&DS"
    }
  ];

const EventDetails = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
            {eventDetails.map((detail, index) => (
                <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8 + index * 0.1, duration: 0.8 }}
                    className="relative bg-black/60 backdrop-blur-md border border-[#4079ff]/30 rounded-lg p-6 hover:border-[#40ffaa]/50 hover:shadow-[0_0_20px_rgba(64,255,170,0.3)] transition-all duration-500 group overflow-hidden"
                >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#4079ff]/5 via-transparent to-[#40ffaa]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#4079ff]/20 via-[#40ffaa]/20 to-[#4079ff]/20 animate-pulse" />
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <detail.icon
                                className="text-[#40ffaa] mx-auto mb-3 drop-shadow-[0_0_10px_rgba(64,255,170,0.5)]"
                                size={28}
                            />
                        </motion.div>
                        <p className="text-sm text-gray-300 mb-1 font-medium">{detail.label}</p>
                        <p className="font-bold text-white text-lg tracking-wide">{detail.value}</p>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default EventDetails;
