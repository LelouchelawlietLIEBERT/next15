import React from "react";
import EditTopicForm from "@/components/EditTopicForm";

const getTopicbyId = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default async function EditTopic({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const data = await getTopicbyId(id);
  if (!data || !data.topic) {
    return <div>Topic not found or an error occurred.</div>;
  }
  const { title, description } = data.topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
