import React from "react";
type Props = {
  params: Promise<{
    id: string;
  }>;
};
const EventPage: React.FC<Props> = async ({ params }) => {
  const { id } = await params;
  return <div>EventPage {id}</div>;
};

export default EventPage;
