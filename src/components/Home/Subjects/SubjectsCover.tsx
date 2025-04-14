import { Card } from "@/components/ui/card";

const subjects = [
  { emoji: "➕➖", name: "Mathematics" },
  { emoji: "🧪", name: "Science" },
  { emoji: "📚", name: "English" },
  { emoji: "🌍", name: "History" },
  { emoji: "🇪🇸", name: "Spanish" },
  { emoji: "💻", name: "Computer Science" },
  { emoji: "🎨", name: "Art" },
  { emoji: "🎵", name: "Music" },
  { emoji: "📝", name: "Writing" },
  { emoji: "🧮", name: "SAT/ACT Prep" },
  { emoji: "🔬", name: "AP Courses" },
  { emoji: "💡", name: "And Many More..." },
];

export const SubjectsCoverSection = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Subjects We Cover
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
          {subjects.map((subject, index) => (
            <Card
              key={index}
              className="p-3 sm:p-4 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="text-xl sm:text-2xl mb-1 sm:mb-2 text-indigo-600">
                {subject.emoji}
              </div>
              <h3 className="font-semibold text-sm sm:text-base">
                {subject.name}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
