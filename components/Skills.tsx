interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Python", level: 70 },
  { name: "Machine Learning", level: 65 },
];

interface SkillsProps {
  basePath: string; // Accept basePath as a prop
}

export default function Skills({ basePath }: SkillsProps) {
  return (
    <section id={`${basePath}/#skills`} className="py-20 bg-primary-light section-animation">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-primary-dark typing-animation">
          Skills
        </h2>

        {/* Skills List */}
        <div className="max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-lg font-semibold text-text-dark">{skill.name}</span>
                <span className="text-lg font-semibold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-accent rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
