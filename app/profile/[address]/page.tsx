import React from "react";
type Props = {
  params: Promise<{
    address: string;
  }>;
};
const ProfilePage: React.FC<Props> = async ({ params }) => {
  const { address } = await params;
  return <div>ProfilePage {address}</div>;
};

export default ProfilePage;
