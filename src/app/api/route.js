export const feedback = [
  {
    id: 1,
    message: "food is good quality.",
  },
  {
    id: 2,
    message: "food is not bad , but not very good.",
  },
   {
    "message": "all good"
   }
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "foodNest is runing",
  });
}
