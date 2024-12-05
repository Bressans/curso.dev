function status(request, response) {
  response.status(200).json({ chave: "teste são sucesso" });
}

export default status;
