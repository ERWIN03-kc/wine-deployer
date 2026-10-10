export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }

  const token = process.env.WINZ_TOKEN;

  if (!token) {
    return res.status(500).json({
      error: "WINZ_TOKEN belum diatur"
    });
  }

  return res.status(501).json({
    error: "Backend deployment belum dikonfigurasi"
  });
}
