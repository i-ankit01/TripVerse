const API_URL = "http://localhost:5000/api";

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