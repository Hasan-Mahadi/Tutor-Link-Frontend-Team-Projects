export const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Find Your Tutor',
      description:
        'Search our database of qualified tutors and filter by subject, availability, price, and ratings.',
    },
    {
      number: 2,
      title: 'Connect & Schedule',
      description:
        'Message tutors directly and schedule sessions at times that work for you.',
    },
    {
      number: 3,
      title: 'Start Learning',
      description:
        'Meet online or in-person and begin your learning journey with expert guidance.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
        How It Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {steps.map((step) => (
          <div key={step.number} className="text-center">
            <div className="bg-indigo-100 w-12 h-12 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center text-indigo-600 text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              {step.number}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {step.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
