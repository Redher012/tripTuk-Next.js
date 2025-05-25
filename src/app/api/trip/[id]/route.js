export async function GET(request, context) {
  const { params } = await context;
  const resolvedParams = await params;

  const tripId = resolvedParams.id;
  const res = await fetch("http://localhost:3000/api/trips");
  const trips = await res.json();

  const singleTrip = trips.filter((t) => t.id === tripId)[0];

  return Response.json({
    trip: singleTrip,
  });
}
