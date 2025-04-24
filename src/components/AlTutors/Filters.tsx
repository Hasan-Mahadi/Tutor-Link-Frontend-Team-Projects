'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Districts = [
  'bagerhat',
  'bandarban',
  'barisal',
  'barguna',
  'bhola',
  'bogura',
  'brahmanbaria',
  'chapai nawabganj',
  'chandpur',
  'chattogram',
  'chuadanga',
  "cox's bazar",
  'cumilla',
  'dinajpur',
  'dhaka',
  'faridpur',
  'feni',
  'gaibandha',
  'gazipur',
  'gopalganj',
  'habiganj',
  'jamalpur',
  'jashore',
  'jhenaidah',
  'jhalokathi',
  'joypurhat',
  'khagrachari',
  'khulna',
  'kishoreganj',
  'kurigram',
  'kushtia',
  'lakshmipur',
  'lalmonirhat',
  'madaripur',
  'magura',
  'manikganj',
  'meherpur',
  'moulvibazar',
  'munshiganj',
  'mymensingh',
  'naogaon',
  'narail',
  'narayanganj',
  'narsingdi',
  'natore',
  'netrokona',
  'nilphamari',
  'noakhali',
  'pabna',
  'panchagarh',
  'patuakhali',
  'pirojpur',
  'rajbari',
  'rajshahi',
  'rangamati',
  'rangpur',
  'satkhira',
  'shariatpur',
  'sherpur',
  'sirajganj',
  'sunamganj',
  'sylhet',
  'tangail',
  'thakurgaon',
];

export default function Filters() {
  // Add this near the top inside the Filters component
  const [price, setPrice] = useState<number>(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (
    query: string,
    value: string | number | boolean
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="bg-white  rounded-lg shadow-sm p-4 sticky top-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">Filters</h2>
        <Button
          variant="link"
          className="text-gray-600 hover:underline p-0 h-auto"
          onClick={() => router.push(`${pathname}`, { scroll: false })}
        >
          Reset All
        </Button>
      </div>

      {/* Subjects Filter (Single Selection) */}
      <FilterSection title="Subjects">
        <RadioGroup
          onValueChange={(value) => handleSearchQuery('subject', value)}
          className="space-y-2"
        >
          {[
            'Physics',
            'Mathematics',
            'Higher Mathematics',
            'Chemistry',
            'Biology',
            'Statistics',
            'Logic',
            'Sociology',
            'Psychology',
            'Islamic History',
            'Islamic Studies',
            'Computer Science',
            'Bangla 1st Paper (HSC)',
            'Bangla 2nd Paper (HSC)',
            'English 1st Paper (HSC)',
            'English 2nd Paper (HSC)',
            'Accounting (HSC)',
            'Management',
            'Marketing',
            'Finance, Banking & Insurance',
          ].map((subject) => (
            <div key={subject} className="flex items-center space-x-2">
              <RadioGroupItem value={subject} id={`subject-${subject}`} />
              <Label htmlFor={`subject-${subject}`} className="text-sm">
                {subject}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection title="Rating">
        <RadioGroup
          onValueChange={(value) => handleSearchQuery('rating', Number(value))}
          className="space-y-2"
        >
          {[4.5, 4.0, 3.0].map((val) => (
            <div key={val} className="flex items-center space-x-2">
              <RadioGroupItem value={val.toString()} id={`rating-${val}`} />
              <Label htmlFor={`rating-${val}`} className="text-sm">
                {'★'.repeat(Math.floor(val)) + '☆'.repeat(5 - Math.floor(val))}{' '}
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
            value={price}
            onChange={(e) => {
              const val = Number(e.target.value);
              setPrice(val);
              handleSearchQuery('priceRange', val);
            }}
          />
        </div>
        <Slider
          value={[price]}
          onValueChange={([val]) => {
            setPrice(val);
            handleSearchQuery('hourlyRate', val);
          }}
          min={0}
          max={5000}
          step={5}
        />
      </FilterSection>

      {/* Availability Filter */}
      <FilterSection title="Availability">
        <div className="flex items-center">
          <Checkbox
            id="avail-now"
            onCheckedChange={(checked) =>
              handleSearchQuery('availability', !!checked)
            }
            className="mr-2"
          />
          <Label htmlFor="avail-now" className="text-sm">
            Available Now
          </Label>
        </div>
      </FilterSection>

      {/* Location Filter (Single Selection) */}
      <FilterSection title="Location">
        <RadioGroup
          onValueChange={(value) => handleSearchQuery('searchTerm', value)}
          className="space-y-2 max-h-48 overflow-y-auto"
        >
          {Districts.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`loc-${option}`} />
              <Label htmlFor={`loc-${option}`} className="text-sm capitalize">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </FilterSection>

      {/* Console Log Button */}
      <Button
        className="mt-4 w-full bg-gray-900 text-white hover:bg-gray-700"
        onClick={() => console.log(searchParams.toString())}
      >
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
