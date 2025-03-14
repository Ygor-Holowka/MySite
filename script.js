function showSection(sectionId) {
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
  
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
  }
  
  function toggleDetails(jobId) {
    var jobDetails = document.getElementById(jobId);
    var button = jobDetails.previousElementSibling;

    if (jobDetails.style.display === "none" || jobDetails.style.display === "") {
        jobDetails.style.display = "block";
        button.textContent = "Ver menos"; 
    } else {
        jobDetails.style.display = "none";
        button.textContent = "Ver mais";
    }
}
