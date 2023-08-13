import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function getAnswer(question) {
  let response;
  console.log("API Key: ", process.env.OPENAI_API_KEY);
  try {
    const chatCompletion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a friendly and helpful teaching assistant who is called Doc Brown by young kids. Answer the question for a second-grade student.",
        },
        { role: "user", content: question },
      ],
      temperature: 0,
      max_tokens: 255,
    });
    response = chatCompletion.data.choices[0].text;
    console.log(response);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
  return JSON.stringify(response);
}
