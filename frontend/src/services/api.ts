
const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export async function api(
  endpoint: string,
  token: string
) {
  const response = await fetch(
    `${BASE_URL}${endpoint}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.json();
}
