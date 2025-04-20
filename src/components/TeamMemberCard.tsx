import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div
      className="bg-white pb-4 pr-2 pl-2 pt-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
      data-aos="flip-down"
    >
      <div className="relative h-60 w-full mb-4 rounded-lg overflow-hidden">
        <Image src={member.image} alt={member.name} fill className="" />
      </div>
      <h3 className="text-xl font-semibold dark:text-black">{member.name}</h3>
      <p className="text-blue-600 mb-2">{member.role}</p>
      <p className="text-gray-600">{member.bio}</p>
    </div>
  );
}
