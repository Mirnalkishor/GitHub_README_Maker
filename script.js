document.getElementById("generateBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const profile = document.getElementById("profile").value.trim();
    const currentlyWorking = document.getElementById("currentlyWorking").value.trim();
    const currentlyLearning = document.getElementById("currentlyLearning").value.trim();
    const askMe = document.getElementById("askMe").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const tools = document.getElementById("tools").value.trim();
    const linkedin = document.getElementById("linkedin").value.trim();
    const github = document.getElementById("github").value.trim();
    const leetcode = document.getElementById("leetcode").value.trim();

    let readme = "";

    if (name) readme += `# Hi, I'm ${name} 👋\n\n`;
    if (profile) readme += `${profile}\n\n`;
    readme += `---\n\n`;

    if (currentlyWorking) readme += `- 🔭 I’m currently working on: ${currentlyWorking}\n`;
    if (currentlyLearning) readme += `- 🌱 I’m currently learning: ${currentlyLearning}\n`;
    if (askMe) readme += `- 💬 Ask me about: ${askMe}\n`;
    if (contact) readme += `- 📫 How to reach me: ${contact}\n`;

    readme += `\n---\n\n`;

    if (tools) {
        readme += `## 🛠️ Languages & Tools\n\n`;
        tools.split(",").map(tool => tool.trim()).forEach(tool => {
            if (tool) readme += `![${tool}](https://img.shields.io/badge/${tool.replace(/\s+/g, "_")}-informational?style=for-the-badge) `;
        });
        readme += `\n\n---\n\n`;
    }

    if (linkedin || github || leetcode) {
        readme += `## 🔗 Profiles\n\n`;
        if (linkedin) readme += `[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](${linkedin})\n`;
        if (github) readme += `[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](${github})\n`;
        if (leetcode) readme += `[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=white)](${leetcode})\n`;
    }

    document.getElementById("generatedReadme").value = readme;
});

document.getElementById("copyBtn").addEventListener("click", function () {
    const textarea = document.getElementById("generatedReadme");
    textarea.select();
    document.execCommand("copy");
    alert("README copied to clipboard!");
});
