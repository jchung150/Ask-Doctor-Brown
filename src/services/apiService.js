export async function getAnswer(question) {
  try {
    const response = await fetch(
      "https://9pdjo9cu43.execute-api.us-east-1.amazonaws.com/dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Preflight": "1",
        },
        body: JSON.stringify({
          question: question,
        }),
      }
    );
    const data = await response.json();
    const answer = data.answer;
    console.log("Doc Brown Answered!");
    return answer;
  } catch (error) {
    console.error("An error occurred: ", error);
    return null;
  }
}

export function textToSpeech(script) {
  fetch("https://wmypv4sqq8.execute-api.us-east-1.amazonaws.com/dev", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Preflight": "1",
    },
    body: JSON.stringify({
      script: script,
    }),
  })
    .then((response) => response.text()) // First get the base64 text response
    .then((audioBase64) => {
      const audioArrayBuffer = Uint8Array.from(atob(audioBase64), (c) =>
        c.charCodeAt(0)
      );
      const audioBlob = new Blob([audioArrayBuffer], { type: "audio/mpeg" });
      const audioUrl = URL.createObjectURL(audioBlob);
      new Audio(audioUrl).play();
    })
    .catch((error) =>
      console.error("An error occurred while synthesizing the speech: ", error)
    );
}
