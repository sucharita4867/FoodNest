import { connect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const feedbackCollection = await connect("feedbacks");
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return Response.json(
        { message: "please send a message" },
        { status: 400 }
      );
    }

    const feedbackCollection = await connect("feedbacks");

    const newFeedback = {
      message,
      date: new Date(),
    };

    const result = await feedbackCollection.insertOne(newFeedback);
    revalidatePath("/feedback");

    return Response.json(
      { acknowledged: true, insertedId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ message: "Invalid JSON body" }, { status: 400 });
  }
}
