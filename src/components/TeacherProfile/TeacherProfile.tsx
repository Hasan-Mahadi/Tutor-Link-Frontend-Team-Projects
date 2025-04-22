"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const TeacherProfile=({teacher}) =>{

  if (!teacher) return <p>Loading profile...</p>;

  return (
    <div className="p-4 space-y-6">
      {/* Cover Image */}
      <div className="relative h-40 w-full rounded-lg overflow-hidden shadow">
        <Image
          src={teacher?.coverImg}
          alt="Cover"
          fill
          className="object-cover"
        />
        <div className="absolute -bottom-12 left-4">
          <Image
            src={teacher?.profileImg}
            alt={teacher?.name}
            width={96}
            height={96}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>

      {/* Info Card */}
      <Card className="mt-16">
        <CardContent className="space-y-4 p-6">
          <h2 className="text-2xl font-bold">{teacher.name}</h2>
          <p className="text-muted-foreground">{teacher.email}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <strong>Gender:</strong> {teacher.gender}
            </div>
            <div>
              <strong>Date of Birth:</strong> {teacher.dateOfBirth}
            </div>
            <div>
              <strong>Contact No:</strong> {teacher.contactNo}
            </div>
            <div>
              <strong>Emergency Contact:</strong> {teacher.emergencyContactNo}
            </div>
            <div>
              <strong>Blood Group:</strong>{" "}
              <Badge variant="outline">{teacher.bloodGroup}</Badge>
            </div>
            <div>
              <strong>Present Address:</strong> {teacher.presentAddress}
            </div>
            <div>
              <strong>Permanent Address:</strong> {teacher.permanentAddress}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
