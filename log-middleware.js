module.exports = (req, res, next) => {
    console.log("Passei pela requisição");
    console.log("Requisição feita em " + req.url);
    next();
}