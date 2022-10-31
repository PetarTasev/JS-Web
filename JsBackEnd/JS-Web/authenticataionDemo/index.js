const server = require('http').createServer((req, res) => {
if (req.url == '/') {
    action(req, res)
} else {
    res.writeHead(404)
    res.end()
}
}).listen(3000)


function parseCookie(req) {
    if (req.headers.cookie) {
        const cookies = Object.fromEntries(req.headers.cookie
            .split(";")
            .map(c => c.trim())
            .map(c => c.split('=')))
             return cookies    
    } else {
        return{}
    }
}
const sessions = {}

function action (req, res) {
    const cookies = parseCookie(req)
    const sessionId = cookies.sessionId || (Math.random() * 99999).toString(16)
    const session = sessions[sessionId] || {}

    session.visited = (session.visited || 0) + 1

    sessions[sessionId] = session
    console.log(sessions)
    
    res.writeHead(200, {
        'Set-Cookie' : `sessionId=${sessionId}; httpOnly`
    })
    res.write('Hello')
    res.end()

}