import { FaUserTie, FaUsers, FaTrophy, FaTools, FaBolt } from "react-icons/fa";

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <FaUserTie className="text-[#4079ff] text-3xl" />,
      title: "Industry Mentors",
      description: "Connect with experts, mentors, and innovators for real-world guidance.",
    },
    {
      icon: <FaUsers className="text-[#40ffaa] text-3xl" />,
      title: "Networking",
      description: "Meet like-minded hackers and future collaborators.",
    },
    {
      icon: <FaTrophy className="text-[#4079ff] text-3xl" />,
      title: "Exciting Prizes & Recognition",
      description: "Win from a prize pool worth ₹25,500 and get noticed by recruiters.",
    },
    {
      icon: <FaTools className="text-[#40ffaa] text-3xl" />,
      title: "Hands-on Experience",
      description: "Step out of the classroom and apply your skills to real-world problems.",
    },
    {
      icon: <FaBolt className="text-[#4079ff] text-3xl" />,
      title: "Fast-Paced, High-Impact",
      description: "Build, prototype, and pitch your ideas in just 24 hours.",
    },
  ];

  return (
    <div className="w-full bg-black/20 py-12 px-6 md:px-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-avartar tracking-wider">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300">
          Why Join Us?
        </span>
      </h2>
      <p className="text-lg text-gray-300 text-center mt-3">
        Here's what's in store for you:
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-black/20 backdrop-blur-sm flex flex-col items-center p-6 rounded-xl shadow-lg transition transform hover:scale-105 w-80 border border-[#4079ff]/20 hover:border-[#4079ff]/40"
          >
            <div className="mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
            <p className="text-gray-300 text-center mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyJoinUs;
