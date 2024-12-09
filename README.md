# Node.js Server Crash Without Error Message

This repository demonstrates a common yet subtle bug in Node.js where a server crashes without providing any error messages. The cause is a missing response handling in the request handling function. 

## Bug
The `server.js` file contains a minimal HTTP server that intentionally omits proper response handling. This omission leads to a crash when a request is made to the server.

## Solution
The `serverSolution.js` file presents a corrected version of the server, where the response is handled appropriately.  Ensure you send an appropriate response with `res.end()` or `res.writeHead()` and other relevant headers before closing the connection.  Even a simple `res.end()` prevents the crash. 

## How to Reproduce
1. Clone this repository.
2. Run `node server.js`.
3. Make a request to `http://localhost:3000`. Observe the server crash without any specific error message in the console.
4.  Now run `node serverSolution.js`.  Make the same request.  Observe the server responds correctly and doesn't crash.

## Lesson Learned
Always handle responses comprehensively in Node.js HTTP servers to prevent unexpected crashes and ensure the application's stability.