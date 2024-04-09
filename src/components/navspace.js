// List of variations
var variations = [
    "Illuminated by Lightning ⚡️",
    "Skyward Sparkles ✨",
    "Radiance of the Sky 🌟",
    "Water's Glowing Embrace 💧",
    "Waves of Luminescence 🌊",
    "Lightning's Dance Above ⚡️",
    "Celestial Brilliance ✨",
    "A Sky Full of Stars 🌌",
    "Luminary Waters 💧",
    "Oceanic Radiance 🌊",
    "Thunderstruck Brilliance ⚡️",
    "Azure Glow Above 🌟",
    "Waves in Moonlight 🌊",
    "Electric Skies Ignite ⚡️",
    "Cosmic Glow ✨",
    "Radiant Horizon 🌅",
    "Luminous Depths 💧",
    "Enchanted Waves 🌊",
    "Thunderous Illumination ⚡️",
    "Stellar Shimmer ✨",
    "Sky's Symphony 🎶",
    "Glowing Ripples 💧",
    "Ripple of Radiance 🌊",
    "Thunderbolt Luminescence ⚡️",
    "Celestial Waters 🌟",
    "Radiant Reflections 🌅",
    "Shining Seas 💧",
    "Luminary Tides 🌊",
    "Lightning's Glow ⚡️",
    "Starlit Serenity ✨",
    "Skyborne Radiance 🌟",
    "Waters of Light 💧",
    "Wave's Luminous Crest 🌊",
    "Thunderous Brilliance ⚡️",
    "Celestial Shores 🌅",
    "Luminescent Depths 💧",
    "Sky's Luminary Dance ✨",
    "Illuminated Tides 🌊"
];


// Function to randomly select a variation and display it
const displayRandomVariation = () => {
    // Get a random variation from the variations array
    const randomVariation = variations[Math.floor(Math.random() * variations.length)];
    // Get the span element
    const craftedText = document.getElementById("crafted-text");
    // Set the content of the span to the randomly chosen variation
    if (craftedText) { // Check if the element exists
        craftedText.textContent = randomVariation;
    } else {
        console.error("Element with id 'crafted-text' not found.");
    }
}

// Call the function to display a random variation
document.addEventListener("DOMContentLoaded", () => {
    displayRandomVariation();
});