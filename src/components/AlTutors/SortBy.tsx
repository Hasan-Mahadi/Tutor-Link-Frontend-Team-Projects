'use client';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const SortBy = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSearchQuery = (
    query: string,
    value: string | number | boolean,
  ) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(query, value.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center">
      <span className="text-sm text-gray-600 dark:text-gray-300 mr-2">
        Sort by:
      </span>
      <Select onValueChange={(value) => handleSearchQuery('sortBy', value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Relevance" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowest">Price (Low to High)</SelectItem>
          <SelectItem value="highest">Price (High to Low)</SelectItem>
          <SelectItem value="newest">Newest First</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
