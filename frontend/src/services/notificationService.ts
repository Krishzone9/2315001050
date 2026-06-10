
export async function getNotifications(
  page = 1,
  limit = 20,
  type?: string
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (type) {
    params.append("notification_type", type);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/notifications?${params}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
    }
  );

  return response.json();
}