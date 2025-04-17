/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pagination() {
  return (
    <nav className="inline-flex rounded-md shadow">
      <Button variant="outline" className="rounded-r-none">
        <i className="fas fa-chevron-left">
          <ArrowLeft></ArrowLeft>
        </i>
      </Button>
      <Button
        variant="outline"
        className="rounded-none border-l-0 text-primary"
      >
        1
      </Button>
      <Button variant="outline" className="rounded-none border-l-0">
        2
      </Button>
      <Button variant="outline" className="rounded-none border-l-0">
        3
      </Button>
      <Button variant="outline" className="rounded-l-none border-l-0">
        <i className="fas fa-chevron-right">
          <ArrowRight></ArrowRight>
        </i>
      </Button>
    </nav>
  );
}
