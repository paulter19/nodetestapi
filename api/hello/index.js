export default function handler(req, res) {
  const name = req.query.name;

  if (name === "paul") {
    return res.status(200).json({
      message: "Hello Paul"
    });
  }

  if (name === "bye") {
    return res.status(200).json({
      message: "Bye World"
    });
  }

  var newMessage = "hi" + name;

  return res.status(200).json({
    message: newMessage 
  });
}
