export default function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "Added comment", comment: newComment });
  }

  if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Max", text: "First comment" },
      { id: "c2", name: "Manual", text: "Second comment" },
    ];
    res.status(200).json({ list: dummyList });
  }
}
