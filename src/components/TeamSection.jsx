import {
  bg,
  blessingImage,
  amakaUpdatedImage,
  leadImage,
  olaImage,
} from "../assets";

const TeamSection = () => {
  const team = [
    {
      name: "Vwakpor Efuetanu",
      role: "Lead Innovator",
      image: leadImage,
    },
    {
      name: "Blessing Ikpia",
      role: "Project Lead",
      image: blessingImage,
    },
    {
      name: "Ugbor Ukamaka",
      role: "Administrative Head",
      image: amakaUpdatedImage,
    },
    {
      name: "Adeleke Olamide",
      role: "Project Secretary",
      image: olaImage,
    },
  ];

  return (
    <section
      id="team-section"
      className="relative bg-black-gradient py-16 flex flex-col items-center"
    >
      {/* Transparent Background Image */}
      <div
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        Meet the Visionaries Behind the Program
      </h2>

      {/* Team Grid */}
      <div className="relative z-5 grid w-full max-w-7xl grid-cols-1 gap-5 px-6 font-mono sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg bg-blue-gradient-2 p-5 text-center shadow-xl transition-transform duration-300 hover:scale-105"
          >
            {/* Photo */}
            <div className="mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-gray-300">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="whitespace-nowrap text-lg font-semibold text-gray-900">
              {member.name}
            </h3>

            {/* Role */}
            {member.role && (
              <p className="whitespace-nowrap text-base text-white">{member.role}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
