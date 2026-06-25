// Readiness Score Calculator

/**
 * Calculates the total score and returns the readiness level.
 * @param {number[]} scores - Array of 10 category scores (0-3).
 * @returns {Object} Result object containing total, level, recommendation, and biggestBlocker.
 */
function calculateReadinessScore(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);

    let level = "";
    let recommendation = "";
    let cssClass = "";

    if (total <= 10) {
        level = "Do not automate yet";
        recommendation = "This process needs documentation, cleanup, or clear ownership before AI touches it.";
        cssClass = "danger";
    } else if (total <= 20) {
        level = "Clean up first";
        recommendation = "The workflow has potential, but needs better data or safer handoffs. Fix the bottlenecks first.";
        cssClass = "warning";
    } else if (total <= 26) {
        level = "Pilot carefully";
        recommendation = "Good candidate. Use draft-only mode or require human approval before action.";
        cssClass = "warning";
    } else {
        level = "Ready for automation pilot";
        recommendation = "The workflow is clear, repeatable, and data is structured. Proceed with a safe pilot.";
        cssClass = "ready";
    }

    // Find the biggest blocker (the lowest score)
    const minScore = Math.min(...scores);
    const categoryNames = [
        "Workflow Clarity", "Process Consistency", "Data Quality", "Tool Access",
        "Ownership", "Risk Level", "Human Review Plan", "Customer Experience Impact",
        "Measurement Plan", "Rollback Plan"
    ];

    // Find the first index with the lowest score
    const lowestIndex = scores.indexOf(minScore);
    const biggestBlocker = minScore < 2 ? categoryNames[lowestIndex] : "None significant";

    return { total, level, recommendation, cssClass, biggestBlocker };
}

// Expose for potential external use
window.SMBReadinessCalculator = { calculateReadinessScore };

// Hook up the UI if the DOM is loaded and elements exist
document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calculate-btn');
    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            // Grab all 10 values
            const clarity = parseInt(document.getElementById('workflowClarity').value, 10);
            const processConsistency = parseInt(document.getElementById('processConsistency').value, 10);
            const dataQ = parseInt(document.getElementById('dataQuality').value, 10);
            const toolAccess = parseInt(document.getElementById('toolAccess').value, 10);
            const ownership = parseInt(document.getElementById('ownership').value, 10);
            const risk = parseInt(document.getElementById('riskLevel').value, 10);
            const humanReviewPlan = parseInt(document.getElementById('humanReviewPlan').value, 10);
            const customerExperienceImpact = parseInt(document.getElementById('customerExperienceImpact').value, 10);
            const measurementPlan = parseInt(document.getElementById('measurementPlan').value, 10);
            const rollbackPlan = parseInt(document.getElementById('rollbackPlan').value, 10);

            const scores = [clarity, processConsistency, dataQ, toolAccess, ownership, risk, humanReviewPlan, customerExperienceImpact, measurementPlan, rollbackPlan];
            const result = calculateReadinessScore(scores);

            // Update UI
            document.getElementById('total-score').textContent = result.total;

            const badge = document.getElementById('readiness-badge');
            badge.textContent = result.level;
            badge.className = 'badge ' + result.cssClass;

            let finalRec = result.recommendation;
            if (result.biggestBlocker !== "None significant") {
                finalRec += " Biggest Blocker: " + result.biggestBlocker + ".";
            }
            document.getElementById('recommendation-text').textContent = finalRec;

            document.getElementById('results-panel').classList.remove('hidden');
        });
    }
});
