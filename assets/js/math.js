/* Javascript file for math related functions */


// Scripts and Function for Transcript Toggle
function toggleTranscript(transcriptId) {
    var transcript = document.getElementById(transcriptId);
    if (transcript.style.display === "none") {
        transcript.style.display = "block";
    } else {
        transcript.style.display = "none";
    }
}

// Script for submitting answers and displaying solutions
function submitAnswer(questionId) {
    var selectedAnswer = document.querySelector('input[name="' + questionId + '_answer"]:checked');
    var feedbackMessageDiv = document.getElementById("feedbackMessage_" + questionId);
    if (selectedAnswer) {
        if (selectedAnswer.value === "correct") {
            feedbackMessageDiv.innerHTML = "<p>Congratulations! Your answer is correct.</p>";
        } else {
            feedbackMessageDiv.innerHTML = "<p>Sorry, your answer is incorrect.</p>";
        }
        var solutionElement = document.getElementById("solution_" + questionId);
        solutionElement.style.display = "block";
        var questionElement = document.querySelector('.' + questionId);
        questionElement.querySelector('.quizForm').style.display = "none";
    } else {
        alert("Please select an answer before submitting.");
    }
}
