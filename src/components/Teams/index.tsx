const Members = [
  {
    name: 'Patrick Sebastian',
    title: 'Developer',
    summary:
      'Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.',
    socials: {
      twitter: '/',
      facebook: '/',
      linkedin: '/',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    name: 'Jean Castux',
    title: 'Developer',
    summary:
      'Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.',
    socials: {
      twitter: '/',
      facebook: '/',
      linkedin: '/',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    name: 'Thierry Halliday',
    title: 'Developer',
    summary:
      'Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.',
    socials: {
      twitter: '/',
      facebook: '/',
      linkedin: '/',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

const Teams = () => {
  const iconColor = '#BF9742';
  return (
    <div className="mx-auto rounded-lg bg-white p-8 shadow">
      <p className="text-center text-3xl font-bold text-accent-secondary ">
        Team Members
      </p>
      <p className="mb-12 text-center text-xl font-normal text-accent-primary ">
        Meat the best team in wolrd
      </p>
      <div className="flex flex-col items-center justify-center md:flex-row">
        {Members.map((member) => {
          return (
            <div className="p-4" key={member.name + member.summary}>
              <div className="mb-4 text-center opacity-90">
                <img
                  alt="profil"
                  src={member.imageUrl}
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-2xl text-accent-secondary ">{member.name}</p>
                <p className="text-xl font-light text-accent-primary ">
                  {member.title}
                </p>
                <p className="max-w-xs py-4 text-lg font-light text-accent-primary ">
                  {member.summary}
                </p>
              </div>
              <div className="mx-auto flex w-44 items-center justify-between border-t border-gray-200 pt-8 text-accent-primary">
                <a
                  className="border-b-[2px] border-transparent hover:border-b-[2px]"
                  href={member.socials.facebook}
                >
                  <svg
                    width="30"
                    height="30"
                    fill={iconColor}
                    className="text-xl transition-colors duration-200 hover:text-accent-secondary "
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>
                <a
                  className="border-b-[2px] border-transparent hover:border-b-[2px]"
                  href={member.socials.twitter}
                >
                  <svg
                    width="30"
                    height="30"
                    fill={iconColor}
                    className="text-xl transition-colors duration-200 hover:text-accent-secondary "
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z"></path>
                  </svg>
                </a>

                <a
                  className="border-b-[2px] border-transparent hover:border-b-[2px]"
                  href={member.socials.linkedin}
                >
                  <svg
                    width="30"
                    height="30"
                    fill={iconColor}
                    className="text-xl transition-colors duration-200 hover:text-accent-secondary "
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;
