// here we will create that function which will help to send the api request


const { Configuration ,OpenAIApi }=require('openai');
const configuration =new Configuration({apiKey:'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'});


const openai=new OpenAIApi(configuration);

// then we can just create the function to make the api call hit


// the temperature parameter in the below api call is just an indication of how much our answer should be creative

export async function sendMsgToOpenAI(message){
    const res=await openai.createCompletion(
        {
            model:'text-davinci-003',
            prompt:message,
            temperature:0.7,
            max_tokens:256,
            top_p:1,
            frequency_penalty:0,
            presence_penalty:0
        }

    );
    return res.data.choices[0].text;
}

//
// curl https://api.openai.com/v1/chat/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer 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" \
//   -d '{
//     "model": "gpt-3.5-turbo",
//     "messages": [
//       {
//         "role": "system",
//         "content": "You are a helpful assistant."
//       },
//       {
//         "role": "user",
//         "content": "Who won the world series in 2020?"
//       },
//       {
//         "role": "assistant",
//         "content": "The Los Angeles Dodgers won the World Series in 2020."
//       },
//       {
//         "role": "user",
//         "content": "Where was it played?"
//       }
//     ]
//   }'