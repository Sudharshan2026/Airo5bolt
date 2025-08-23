import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import sponsor from './assets/sponsor.jpg'

const Footer: React.FC = () => {
  return (
    <footer className="backdrop-blur-sm border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground font-avartar tracking-wider">AIRO 5.O</h3>
              <p className="text-muted-foreground mb-4">
                A 24-hour hackathon exploring the upside-down world of technology.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
                <SocialIcon icon={<Github size={18} />} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
              <div className="flex gap-8">
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a href="/" className="hover:text-primary transition-colors">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/domain" className="hover:text-primary transition-colors">
                        Domains
                      </a>
                    </li>
                    <li>
                      <a href="/#timeline" className="hover:text-primary transition-colors">
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a href="/guidelines" className="hover:text-primary transition-colors">
                        Guidelines
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      <a href="/#prizes" className="hover:text-primary transition-colors">
                        Prizes
                      </a>
                    </li>
                    <li>
                      <a href="/team" className="hover:text-primary transition-colors">
                        Team
                      </a>
                    </li>
                    <li>
                      <a href="/results" className="hover:text-primary transition-colors">
                        Result
                      </a>
                    </li>                    
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Sponsors</h3>
              <div className="grid grid-cols-3 gap-4">
                <SponsorLogo name="RM Group Of Compnies" />
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6 text-center text-muted-foreground text-sm">
            <p>© 2025 AIRO 5.O | Sri Sairam Engineering College</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-foreground transition-all"
  >
    {icon}
  </a>
);

interface SponsorLogoProps {
  name: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name }) => (
  <div className="flex items-center space-x-4">
    <img
      src={sponsor}
      alt="sponsorlogo"
      className="bg-muted/50 rounded flex items-center justify-center h-20 w-32"
    />
    <p>{name}</p>
  </div>

);

export default Footer;
