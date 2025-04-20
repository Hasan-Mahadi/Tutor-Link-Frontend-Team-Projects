'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export const MyProfile = ({ student }: any) => {
  if (!student) return <p>Loading profile...</p>;

  return (
    <div className="p-4 space-y-6">
      {/* Cover Image */}
      <div className="relative h-72  w-full rounded-lg overflow-hidden shadow">
        <Image
          src={student?.coverImg}
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute -bottom-1  left-4">
          <Image
            src={student?.profileImg}
            alt={student?.name}
            width={150}
            height={96}
            className=" border-4   border-white shadow-lg z-10"
          />
        </div>
      </div>

      {/* Info Card */}
      <Card className="mt-16">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-bold">{student.name}</h2>
          <p className="text-muted-foreground">{student.email}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Gender:</strong> {student.gender}
            </div>
            <div>
              <strong>Date of Birth:</strong> {student.dateOfBirth}
            </div>
            <div>
              <strong>Contact No:</strong> {student.contactNo}
            </div>
            <div>
              <strong>Emergency Contact:</strong> {student.emergencyContactNo}
            </div>
            <div>
              <strong>Blood Group:</strong>{' '}
              <Badge variant="outline">{student.bloodGroup}</Badge>
            </div>
            <div>
              <strong>Present Address:</strong> {student.presentAddress}
            </div>
            <div>
              <strong>Permanent Address:</strong> {student.permanentAddress}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
