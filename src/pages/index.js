import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "./component/Button";
import { getAnswer, textToSpeech } from "../services/apiService";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [editableTranscript, setEditableTranscript] = useState("");
  const [answer, setAnswer] = useState("");
  const [isShow, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleStart = () => {
    setShow(!isShow);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async () => {
    try {
      const responseAnswer = await getAnswer(editableTranscript);
      setAnswer(responseAnswer);
      textToSpeech(responseAnswer);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleReset = () => {
    resetTranscript();
    setEditableTranscript("");
    setAnswer("");
  };

  const handleSpeechResult = () => {
    console.log("Direct Transcript:", transcript);
    setEditableTranscript(
      (prevTranscript) => prevTranscript + " " + transcript
    );
  };

  const options = {
    continuous: true,
    language: "en-CA",
    onResult: handleSpeechResult,
    onError: (error) => console.error("Speech Recognition Error:", error),
  };

  return (
    <div>
      {isShow ? null : (
        <div className="flex flex-col h-screen justify-center items-center">
          <div className="mb-5 text-3xl">Ask Doc Brown</div>
          <input
            className="mb-5 text-center h-10"
            type="text"
            value={name}
            onChange={handleChange}
            placeholder="Enter your first name"
          />
          <Button className="" onClick={handleStart} text="Start" />
        </div>
      )}

      {isShow ? (
        <div className="container mx-auto px-1">
          <div className="p-8 text-center">
            <div className="mb-5 text-l font-sans">
              Hello! {name}
              <br></br>I am Doctor Brown.
              <br></br>Ask Me Any Question.
            </div>

            <p
              className="pb-5 font-sans"
              style={{ color: listening ? "green" : "red" }}
            >
              {listening ? "Listening..." : "Microphone Off"}
            </p>
            <div className="mb-5 flex justify-between">
              <Button
                onClick={() => SpeechRecognition.startListening(options)}
                text="Start"
              />
              <Button onClick={SpeechRecognition.stopListening} text="Stop" />
              <Button onClick={handleReset} text="Reset" />
            </div>

            <input
              className="questionShow overflow-auto w-full block box-border bg-white h-24 p-4 border-2 border-gray-400 mb-5 rounded"
              type="text"
              value={editableTranscript}
              onChange={(e) => setEditableTranscript(e.target.value)}
              placeholder="Press start to record your question or type it here..."
            />

            <button
              onClick={handleSubmit}
              className="border
              block
              w-full
              mb-5
              border-gray-400 
              rounded-lg 
              bg-white
              hover:shadow-md
              hover:border-opacity-0
              font-sans 
              text-gray-700
              text-m
              py-3"
            >
              Submit
            </button>

            <div className="answerShow overflow-auto box-border bg-white h-56 p-4 border-2 border-gray-400 mb-5 rounded">
              {answer ? (
                answer
              ) : (
                <span className="text-gray-400">
                  Doc Brown's answer will appear here...
                </span>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
