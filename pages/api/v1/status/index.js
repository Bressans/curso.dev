function status(request, response) {
  response.status(200).json({ chave: "teste sucesso" });
}

export default status;
