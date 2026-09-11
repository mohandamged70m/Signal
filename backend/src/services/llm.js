// LLM boundary. Keep all provider calls here so routes never change when scaling.
async function generateCode({ route, prompt, images }) {
  // TODO: plug GEMINI_API_KEY / OPENAI_API_KEY here.
  return {
    route,
    code: `// TODO: generated Next.js component for ${route}\n// prompt: ${prompt}\n// images: ${images.length}`,
    components: ["components/Navbar.tsx", "components/Hero.tsx"],
  };
}

async function patchRegion({ file, region, instruction }) {
  return { file, region, patch: `// TODO: patch for "${instruction}"` };
}

module.exports = { generateCode, patchRegion };
