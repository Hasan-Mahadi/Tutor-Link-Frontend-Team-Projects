import Image from 'next/image';

export interface SuccessStory {
  quote: string;
  author: string;
  role: string;
  image?: string;
  improvement?: string;
  sessions?: number;
  type: 'student' | 'tutor';
}

export function SuccessStoryCard({ story }: { story: SuccessStory }) {
  return (
    <div
      className={`group relative p-8 rounded-xl overflow-hidden transition-all duration-300 ${story.type === 'student' ? 'bg-indigo-50 hover:bg-indigo-100' : 'bg-indigo-50 hover:bg-indigo-100'}`}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className={`absolute top-0 left-0 w-2 h-full bg-indigo-600`}></div>

      <div className="flex flex-col h-full">
        <blockquote className="text-lg text-gray-800 mb-6 relative pl-6">
          <span className="absolute top-0 left-0 text-4xl font-serif text-gray-400 opacity-50"></span>
          {story.quote}
        </blockquote>

        <div className="mt-auto flex items-center">
          {story.image && (
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <Image
                src={story.image}
                alt={story.author}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline">
              <p className="font-semibold text-gray-900 mr-2">{story.author}</p>
              <p className="text-sm text-indigo-600">{story.role}</p>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              {story.improvement && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800 shadow-sm">
                  📈 {story.improvement}
                </span>
              )}
              {story.sessions && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-800 shadow-sm">
                  🗓️ {story.sessions} sessions
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
