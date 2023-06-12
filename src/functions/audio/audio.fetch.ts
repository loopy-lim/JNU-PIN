export const voiceToText = async (blob: Blob) => {
  const form = new FormData();
  form.append("file", blob, "file.mpeg");

  const res = await fetch(import.meta.env.VITE_SERVER + "/transcribe", {
    method: "POST",
    body: form,
  });
  return await res.text();
};

export const textToVoice = (text:string) => {
  const audio = new Audio(import.meta.env.VITE_SERVER + `/tts?text=${text}`);
  audio.play();
}