function showSection(sectionId) {
    
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
  }
  
  function toggleDetails(id) {
    const details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
      details.style.display = "block";
    } else {
      details.style.display = "none";
    }
  }
  
