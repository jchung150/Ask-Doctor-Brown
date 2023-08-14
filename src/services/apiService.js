export async function getAnswer(question) {
  try {
    const response = await fetch(
      "https://9pdjo9cu43.execute-api.us-east-1.amazonaws.com/dev/getanswer",
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

    if (!response.ok) {
      throw new Error(`Server responded with a status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.body) {
      const innerData = JSON.parse(data.body);
      const answer = innerData.answer;

      console.log("Doc Brown Answered!");
      console.log(answer);

      return answer;
    }

    throw new Error("Unexpected response format");
  } catch (error) {
    console.error("An error occurred: ", error);
    return null;
  }
}

export function textToSpeech(script) {
  fetch(
    "https://wmypv4sqq8.execute-api.us-east-1.amazonaws.com/dev/texttospeech",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        script: script,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Server responded with a status: ${response.status}`);
      }
      return response.blob(); // Convert the binary data to a blob
    })
    .then((audioBlob) => {
      const audioUrl = URL.createObjectURL(audioBlob);
      new Audio(audioUrl).play(); // Play the blob using the Audio API
    })
    .catch((error) => {
      console.error(
        "An error occurred while fetching or playing the audio: ",
        error
      );
    });
}
