import type { Memberinterface } from "./interfaces/Memberinterface";

interface CardProps {
  m: Memberinterface;
};

function Card({ m }: CardProps) {
  return (
    
    <div className="p-4 w-full">
      <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 space-y-4 hover:border-1 border-blue-600">
        <img
          className="h-24 w-24 rounded-full object-cover border-2 border-blue-600"
          src={m.avatarUrl}
          alt={m.name}
        />
        <div className="text-center space-y-1">
          <p className="text-lg font-semibold text-black">{m.name}</p>
          <p className="text-[12px] text-gray-500">{m.role} — {m.department}</p>
          <p className="text-[14px] text-gray-700">{m.bio}</p>
          <p className="text-sm text-gray-400">Joined on {m.joinedDate}</p>
        </div>
        <div className="flex gap-2">
          <button
            className="border bg-blue-600  text-white hover:border-transparent hover:text-white px-5 py-2 rounded-full "
            title={m.email}
          >
            Email
          </button>

          {m.linkedin && (
            <a
              href={m.linkedin}
              target="_blank"
              className=" text-blue-600 hover:underline px-4 py-2"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
