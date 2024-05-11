import { TitleText } from "@/components/title/TitleText";
import { TeamCard } from "@/components/cards/TeamCard";
import { AnimatedCard } from "./cards/animated-card";

interface TeamSectionProps {
  title: string;
  team: any[];
}

export const TeamSection: React.FC<TeamSectionProps> = ({ title, team }) => {
  return (
    <div>
      <TitleText title={title} />
      <div className="flex flex-wrap justify-center items-center gap-4 px-1 lg:px-12">
        {team.map((member: any, index: number) => (
          <TeamCard
            className="w-full md:w-[49%] lg:w-[24%]"
            key={index}
            team={member}
          />
        ))}
      </div>
    </div>
  );
};
