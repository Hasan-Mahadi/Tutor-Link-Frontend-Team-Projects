import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const CTASection = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {" "}
        {/* Reduced gap */}
        {/* Student CTA */}
        <Card className="bg-indigo-50 p-6 sm:p-8 rounded-lg text-center border-0">
          <div className="text-3xl sm:text-4xl">🎓</div>{" "}
          {/* Reduced margin */}
          <h3 className="text-xl sm:text-2xl font-bold">
            {" "}
            {/* Reduced margin */}
            Are you a student looking to boost your grades?
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {" "}
            {/* Reduced margin */}
            Find the perfect tutor to help you achieve your academic goals.
          </p>
          <div>
            <Button className="w-fit px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold">
              Sign Up as Student
            </Button>
          </div>
        </Card>
        {/* Tutor CTA */}
        <Card className="bg-gray-100 p-6 sm:p-8 rounded-lg text-center border-0">
          <div className="text-3xl sm:text-4xl">🧑‍🏫</div>{" "}
          {/* Reduced margin */}
          <h3 className="text-xl sm:text-2xl font-bold">
            {" "}
            {/* Reduced margin */}
            Ready to share your knowledge & earn?
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            {" "}
            {/* Reduced margin */}
            Join our network of expert tutors and help students succeed.
          </p>
          <div>
            <Button className="w-fit px-4 py-2 bg-gray-800 hover:bg-black text-white text-sm font-semibold">
              Register as Tutor
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
