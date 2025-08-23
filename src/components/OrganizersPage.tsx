import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  linkedin?: string; 
}

interface TeamSectionProps {
  title: string;
  members: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ title, members }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-primary text-center mb-8 drop-shadow-neon-red uppercase tracking-wider">
      {title}
    </h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      {members.map((member, index) => (
        <div
          key={index}
          className="bg-muted rounded-lg w-80 sm:w-80 md:w-80 lg:w-96 xl:w-86 border border-primary hover:border-primary transition-all duration-300 transform hover:-translate-y-3 shadow-primary hover:shadow-primary-lg hover:scale-105"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className="group relative w-36 h-36">
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary shadow-primary">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {member.linkedin && (
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-muted/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <Linkedin 
                      className="text-primary hover:text-primary transform hover:scale-125 transition-all duration-200"
                      size={36}
                    />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mt-4 mb-1 drop-shadow-neon-red">
              {member.name}
            </h3>
            <p className="text-muted-foreground">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OrganizersPage: React.FC = () => {
  const keyPersons: TeamMember[] = [
    { name: "Dr. Swagata Sarkar", position: "HOD", image: "1591960457895.jpeg", linkedin: "https://www.linkedin.com/in/swagatabsarkar/" }
  ];
    
  const staffCoordinators: TeamMember[] = [
    { name: "Mrs.Madhivadhani D", position: "Assistant professor", image: "Mam.jpg", linkedin: "https://www.linkedin.com/in/madhivadhani-d-972018319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];

  const overallCoordinators: TeamMember[] = [
    { name: "Prabhu S", position: "Chairperson", image: "pra.jpg", linkedin: "https://www.linkedin.com/in/prabhu-s-b20018286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Aruna Varsha", position: "Vice Chairperson", image: "Aruna.jpg", linkedin: "https://www.linkedin.com/in/aruna-varsha-r-0827852a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  ];
  const over: TeamMember[] = [
    { name: "Sudharshan B", position: "Secretary", image: "profile4.jpg", linkedin: "https://sudharshan2026.github.io/" },
    { name: "Vikash Raaj", position: "Secretary", image: "vikash.jpg"}
  ];
  const webDevelopers: TeamMember[] = [
    { name: "Aravind M", position: "Web Developer", image: "ara.jpg", linkedin: "http://www.linkedin.com/in/aravind-m-1331062b7" },
    { name: "Robin S", position: "Web Developer", image: "Robin.jpg", linkedin: "https://www.linkedin.com/in/robin-s-041239292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Arun Nehru S", position: "Web Developer", image: "arun.jpg", linkedin: "https://www.linkedin.com/in/arun-nehru-aa93aa271/" },

  ];
  const secretaries: TeamMember[] = [
    // { name: " S", position: "Secretary", image: "Surya.jpg" },
    { name: "Ashok Aathreyan U", position: "", image: "ashok.jpg", linkedin: "https://www.linkedin.com/in/ashok-aathreyan-u?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "Yashwanth Kumar R", position: "", image: "yash.jpg", linkedin: "https://www.linkedin.com/in/yashwanth-kumar-r-1156a2329" },
    { name: "Nataraj EL", position: " ", image: "nat.jpg", linkedin: "https://www.linkedin.com/in/nataraj-el?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "SUJITH S M", position: "", image: "sujith.jpg", linkedin: "https://www.linkedin.com/in/sujith-s-m/" },
    { name: "Mahalakshimi P", position: "", image: "maha.jpg" }
  ];

  const poster: TeamMember[] = [
    { name: "Krishna Kumar R", position: " ", image: "kkr.jpg", linkedin: "https://www.linkedin.com/in/krishna-kumar-data-analyst/" },
    { name: "Pooja M", position: " ", image: "pooja.jpg", linkedin: "http://www.linkedin.com/in/pooja-m-88b89228b" },
    { name: "DAKSHINI K", position: " ", image: "dak.jpg", linkedin: "https://www.linkedin.com/in/dakshini-kannan-a8864a28a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
  ];


  // const mediaTeam: TeamMember[] = [
  //   { name: "N", position: "Media Team", image: "Naaga Dheva Dharshan.jpeg", linkedin: "https://www.linkedin.com/in/naagadhevadharshann/" },
  //   { name: "H", position: "Media Team", image: "Hemanathan.jpg", linkedin: "https://www.linkedin.com/in/r-hemanathan-a5a504257" },
  //   { name: "J", position: "Media Team", image: "Gokul J.jpg" }
  // ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-background text-foreground animate-bg-flicker">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-neon animate-glow-red uppercase tracking-wide animate-text-pulse">
            MEET THE TEAM
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto animate-expand-line-fast"></div>
        </div>
        <TeamSection title="KEY PERSON" members={keyPersons} />
        <TeamSection title="STAFF CO-ORDINATOR" members={staffCoordinators} /> 
        <TeamSection title="OVERALL CO-ORDINATORS" members={overallCoordinators} />
        <TeamSection title="SECRETARY" members={over} />
        <TeamSection title="WEB DEVELOPERS" members={webDevelopers} />
        <TeamSection title="POSTER TEAM" members={poster} />
        <TeamSection title="SPONSERSHIP TEAM" members={secretaries} />
      </div>
    </div>
  );
};
export default OrganizersPage;
