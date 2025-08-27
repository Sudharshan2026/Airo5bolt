import { useState } from 'react';
import { MapPin, Clock, Users, Trophy, FileText, X } from 'lucide-react';
import './AiroHackathon.css';

const AiroHackathonPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const eventHighlights = [
    { icon: <Clock className="w-5 h-5 mr-3 text-blue-400" />, text: 'Duration: 2 Hours' },
    { icon: <Users className="w-5 h-5 mr-3 text-blue-400" />, text: 'Team Size: 3 members per team' },
    { icon: <FileText className="w-5 h-5 mr-3 text-blue-400" />, text: 'Problem Statement: Revealed on the spot' },
    { icon: <MapPin className="w-5 h-5 mr-3 text-blue-400" />, text: 'Mode: On-campus (bring your laptops)' },
    { icon: <Trophy className="w-5 h-5 mr-3 text-blue-400" />, text: 'Tools Allowed: Figma, Canva' },
  ];

  const eventFlow = [
    { time: '11:00 – 11:15', task: 'Problem Release + Research & Wireframing' },
    { time: '11:15 – 12:15', task: 'UI Design Sprint (with Creative Tasks)' },
    { time: '12:15 – 12:55', task: 'Team Presentations & Live Judging' },
    { time: '12:55 – 1:00', task: 'Wrap-up & Scoring' },
  ];

  const evaluationCriteria = [
    'Creativity & Innovation',
    'Usability & User-Centered Design',
    'Visual Design & Aesthetics',
    'Presentation & Clarity',
  ];

  const rules = [
    'Team size: 3 members per team',
    'Problem statement will be revealed only during the event',
    'All designs must be original (plagiarism = disqualification)',
    'Use of pre-built templates must be declared',
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative airo-page">
      <div className="fixed inset-0 z-0 airo-bg" />

      <nav className="relative z-50 flex items-center justify-between p-4 backdrop-blur-sm bg-gray-900/80 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
          <span className="text-xl font-bold">AIRO 5.0</span>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <div className="space-y-1"><div className="w-6 h-0.5 bg-white"></div><div className="w-6 h-0.5 bg-white"></div><div className="w-6 h-0.5 bg-white"></div></div>}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-800 z-40 p-4">
          {/* Mobile nav content can be added here if needed */}
        </div>
      )}

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            AIRO 5.0 | UI/UX Mini Hackathon
          </h1>
          <p className="text-xl text-gray-300">Design Under Pressure!</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Event Highlights</h2>
              <ul className="space-y-3 text-gray-300">
                {eventHighlights.map((item, index) => (
                  <li key={index} className="flex items-center">{item.icon}{item.text}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Prize Distribution</h2>
              <p className="text-gray-300">
                After lunch, all participants gather at Apple Hall where the
                winners are announced and prizes are distributed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Event Flow (11:00 AM – 1:00 PM)</h2>
              <ol className="relative border-l border-gray-700 space-y-6 pl-4">
                {eventFlow.map((item, index) => (
                  <li key={index} className="ml-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900"></span>
                    <h3 className="font-semibold">{item.time}</h3>
                    <p className="text-sm text-gray-400">{item.task}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Evaluation Criteria</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {evaluationCriteria.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Rules</h2>
              <ul className="space-y-2 text-gray-300 list-disc list-inside">
                {rules.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 text-center mt-16 text-gray-500 pb-8">
        <p>Let your designs speak louder than words at AIRO 5.0 – UI/UX Mini Hackathon!</p>
      </footer>
    </div>
  );
};

export default AiroHackathonPage;
