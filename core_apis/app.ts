setTimeout(() => {
  const encoder = new TextEncoder();

  const fileContent = encoder.encode("First message from Deno");

  Deno.writeFile("test.txt", fileContent).then(() => {
    console.log("done");
  });
}, 1000);
