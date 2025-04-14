"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Label } from "@/components/ui/label";

export const Districts = [
  "bagerhat",
  "bandarban",
  "barisal",
  "barguna",
  "bhola",
  "bogura",
  "brahmanbaria",
  "chapai nawabganj",
  "chandpur",
  "chattogram",
  "chuadanga",
  "cox's bazar",
  "cumilla",
  "dinajpur",
  "dhaka",
  "faridpur",
  "feni",
  "gaibandha",
  "gazipur",
  "gopalganj",
  "habiganj",
  "jamalpur",
  "jashore",
  "jhenaidah",
  "jhalokathi",
  "joypurhat",
  "khagrachari",
  "khulna",
  "kishoreganj",
  "kurigram",
  "kushtia",
  "lakshmipur",
  "lalmonirhat",
  "madaripur",
  "magura",
  "manikganj",
  "meherpur",
  "moulvibazar",
  "munshiganj",
  "mymensingh",
  "naogaon",
  "narail",
  "narayanganj",
  "narsingdi",
  "natore",
  "netrokona",
  "nilphamari",
  "noakhali",
  "pabna",
  "panchagarh",
  "patuakhali",
  "pirojpur",
  "rajbari",
  "rajshahi",
  "rangamati",
  "rangpur",
  "satkhira",
  "shariatpur",
  "sherpur",
  "sirajganj",
  "sunamganj",
  "sylhet",
  "tangail",
  "thakurgaon",
];

const initialFilters = {
  subjects: "",
  rating: 0,
  priceRange: 1000,
  availability: false,
  location: "",
};

export default function Filters() {
  const [filters, setFilters] = useState(initialFilters);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 sticky top-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Filters</h2>
        <Button
          variant="link"
          className="text-primary hover:underline p-0 h-auto"
          onClick={() => setFilters(initialFilters)}
        >
          Reset All
        </Button>
      </div>

      {/* Subjects Filter */}
      <FilterSection title="Subjects">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search subjects..."
            className="w-full mb-2"
          />
        </div>
        <div className="space-y-2">
          {[
            "Mathematics",
            "Science",
            "English",
            "History",
            "Programming",
            "Art & Design",
            "Music",
          ].map((subject) => (
            <div key={subject} className="flex items-center">
              <Checkbox
                id={`subject-${subject}`}
                checked={filters.subjects === subject}
                onCheckedChange={(checked) =>
                  setFilters((prev) => ({
                    ...prev,
                    subjects: checked ? subject : "",
                  }))
                }
                className="mr-2"
              />
              <Label htmlFor={`subject-${subject}`} className="text-sm">
                {subject}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection title="Rating">
        <RadioGroup
          value={filters.rating.toString()}
          onValueChange={(value) =>
            setFilters({ ...filters, rating: Number(value) })
          }
          className="space-y-2"
        >
          {[4.5, 4.0, 3.0].map((val) => (
            <div key={val} className="flex items-center   space-x-2">
              <RadioGroupItem value={val.toString()} id={`rating-${val}`} />
              <Label htmlFor={`rating-${val}`} className="text-sm">
                {"★".repeat(Math.floor(val)) + "☆".repeat(5 - Math.floor(val))}{" "}
                {val} & up
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="Hourly Rate">
        <div className="flex justify-between mb-2">
          <Input type="number" className="w-20" value={0} disabled />
          <span className="mx-2">to</span>
          <Input
            type="number"
            className="w-20"
            value={filters.priceRange}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: Number(e.target.value),
              })
            }
          />
        </div>
        <Slider
          value={[0, filters.priceRange]}
          onValueChange={([_, max]) =>
            setFilters({ ...filters, priceRange: max })
          }
          min={0}
          max={2000}
          step={5}
        />
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection title="Availability">
        <div className="flex items-center">
          <Checkbox
            id="avail-now"
            checked={filters.availability}
            onCheckedChange={(checked) =>
              setFilters({ ...filters, availability: !!checked })
            }
            className="mr-2"
          />
          <Label htmlFor="avail-now" className="text-sm">
            Available Now
          </Label>
        </div>
      </FilterSection>

      {/* Location Filter */}
      <FilterSection title="Location">
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {Districts.map((option) => (
            <div key={option} className="flex items-center">
              <Checkbox
                id={`loc-${option}`}
                checked={filters.location === option}
                onCheckedChange={(checked) => {
                  setFilters((prev) => ({
                    ...prev,
                    location: checked ? option : "",
                  }));
                }}
                className="mr-2"
              />
              <Label htmlFor={`loc-${option}`} className="text-sm capitalize">
                {option}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Console Log Button */}
      <Button className="mt-4 w-full" onClick={() => console.log(filters)}>
        Apply Filters
      </Button>
    </div>
  );
}

function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="font-medium">{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}
