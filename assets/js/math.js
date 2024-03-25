/* Javascript file for math related functions */


/* Scripts and Function for Transcript Toggle */
    (function toggleTranscript(transcriptId) {
    var transcript = document.getElementById(transcriptId);
    if (transcript.style.display === "none") {
        transcript.style.display = "block";
    } else {
        transcript.style.display = "none";
    }
});


/* Script for submitting answers and displaying solutions */
    // Function to submit the answer
   ( function submitAnswer(questionId) {
        // Get the selected answer
        var selectedAnswer = document.querySelector('input[name="' + questionId + '_answer"]:checked');
        // Get the feedback message div
        var feedbackMessageDiv = document.getElementById("feedbackMessage_" + questionId);
        // Check if an answer is selected
        if (selectedAnswer) {
            // Provide feedback for correct or incorrect answer
            if (selectedAnswer.value === "correct") {
                feedbackMessageDiv.innerHTML = "<p>Congratulations! Your answer is correct.</p>";
            } else {
                feedbackMessageDiv.innerHTML = "<p>Sorry, your answer is incorrect.</p>";
            }
            // Display solution regardless of the answer
            var solutionElement = document.getElementById("solution_" + questionId);
            solutionElement.style.display = "block";
            // Hide the form after submission
            var questionElement = document.querySelector('.' + questionId);
            questionElement.querySelector('.quizForm').style.display = "none";
        } else {
            // Alert if no answer is selected
            alert("Please select an answer before submitting.");
        }
    });
