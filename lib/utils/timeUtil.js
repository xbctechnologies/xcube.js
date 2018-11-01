function getMicroseconds() {
    return (new Date().getTime() * 1000).toString();
}

module.exports = {
    getMicroseconds: getMicroseconds
}