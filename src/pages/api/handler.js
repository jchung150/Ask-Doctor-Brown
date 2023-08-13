export async function getAnswer(question) {
  try {
    const response = await fetch(
      "https://9pdjo9cu43.execute-api.us-east-1.amazonaws.com/dev",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: question,
        }),
      }
    );
    const data = await response.json();
    const answer = data.answer;
    console.log("Doc Brown Answered!")
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
    },
    body: JSON.stringify({
      script: script,
    }),
  })
    .then((response) => response.blob())
    .then((audioBlob) => {
      console.log("Audio is working!")
      const audioUrl = URL.createObjectURL(audioBlob);
      new Audio(audioUrl).play();
    })
    .catch((error) =>
      console.error("An error occurred while synthesizing the speech: ", error)
    );
}
