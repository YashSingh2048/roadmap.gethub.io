function generateRoadmap() {
    const goal = document.getElementById('goal-input').value;
    const roadmapContainer = document.getElementById('roadmap');
    roadmapContainer.innerHTML = '';

    // Sample roadmap data
    const steps = [
        { text: 'Step 1: Define Your Goal', photo: 'step1.jfif' },
        { text: 'Step 2: Create a Plan', photo: 'step2.jfif' },
        { text: 'Step 3: Take Action', photo: 'step3.jfif' },
        { text: 'Step 4: Track Progress', photo: 'step4.jfif' },
        { text: 'Step 5: Celebrate Milestones', photo: 'step5.jfif' }
    ];

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.classList.add('roadmap-step');
        stepDiv.innerHTML = `
            <h3>${step.text}</h3>
            <img src="${step.photo}" alt="Step ${index + 1}">
        `;
        roadmapContainer.appendChild(stepDiv);
    });

    // Show the roadmap section
    const outputSection = document.getElementById('output-section');
    outputSection.style.display = 'block';
}
