import OpenAI from "openai";
import config from "../config/config";
const openai = new OpenAI({
  apiKey: config.openApiKey,
});

const createChatContent = async ({title, type}) =>{
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Act as a film writer and create a storyline/plot description for a ${type} film titled ${title}. Include key characters, the setting, main conflict, and a brief outline of the plot progression.`,
        },
      ],
    });
    return completion.choices[0].message;

}

const genrateContentBasedImg = async () =>{

    const image = await openai.images.generate({
      prompt: "A cute baby sea otter",
    });

    return image.data[0].url;
}

export  {createChatContent, genrateContentBasedImg};



