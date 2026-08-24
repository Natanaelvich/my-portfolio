import { Icon } from "@/app/components/svg-icon";
import { skillCategories } from "@/content/profile";
import { getBrandIconColor } from "@/lib/brand-colors";

export function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="skills-grid">
          {skillCategories.map(({ title, items }) => (
            <div className="skill-category" key={title}>
              <h3>{title}</h3>
              <div className="skill-items">
                {items.map(({ icon, label }) => {
                  const brandColor = getBrandIconColor(icon);
                  return (
                    <div className="skill-item" key={label}>
                      <Icon
                        name={icon}
                        style={brandColor ? { color: brandColor } : undefined}
                      />
                      <span>{label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
