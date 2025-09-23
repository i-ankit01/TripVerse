const API_URL = "https://tripverse-qz6k.onrender.com/api";

export async function getOutput(formData){
    const result = await fetch(`${API_URL}/plan-trip`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }); 
  const data = await result.json();
  if (!result.ok) throw new Error(data.message || "Content generation failed");
  return data;
}

export async function chatBotOutput(userPrompt){
  const response = await fetch(`${API_URL}/chatbot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userPrompt,
        }),
      });

      // console.log("sent: " + userPrompt);

      if (!response.ok) {
        throw new Error(`Chatbot request failed ${response.status}`);
      }

      const data = await response.json();
      return data;
}