// TODO get the user input

const buffer = new Uint8Array(4096);

console.log("What site u want to fetch?");
await Deno.stdin.read(buffer);

const decoder = new TextDecoder();

const input = decoder.decode(buffer);
console.log(`Fetching ${input}`);

// TODO send a http request

const response = await fetch(input);

// TODO parse the response

const data = await response.json();

// TODO save it to a file

const encoder = new TextEncoder();

const fileContent = encoder.encode(data);

await Deno.writeFile("data.txt", fileContent);

console.log("Done");
