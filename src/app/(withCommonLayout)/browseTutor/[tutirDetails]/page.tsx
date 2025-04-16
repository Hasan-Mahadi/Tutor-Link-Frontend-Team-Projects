import TutorProfile from '@/components/TutorDetails/TutorDetails';
import { getSingleTutor } from '@/services/tutiors';
import React from 'react';

const TutorDetailsPage = async ({
  params,
}: {
  params: Promise<{ tutirDetails: string }>;
}) => {
  const { tutirDetails: tutorId } = await params;
  const { data: tutor } = await getSingleTutor(tutorId);
  // console.log(tutor)

  return (
    <div>
      <TutorProfile tutor={tutor}></TutorProfile>
    </div>
  );
};

export default TutorDetailsPage;
