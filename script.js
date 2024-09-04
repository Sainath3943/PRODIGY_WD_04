

document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    const projectItems = document.querySelectorAll('.project-item');
  
    function handleAnimation(elements) {
      elements.forEach(item => {
        const elementTop = item.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
  
       
        if (elementTop < viewportHeight * 0.8) {
          item.classList.add('show');
        } else {
          item.classList.remove('show'); 
        }
      });
    }
  
    
    window.addEventListener('scroll', () => {
      handleAnimation(skillItems);
      handleAnimation(projectItems);
    });
  
    
    handleAnimation(skillItems);
    handleAnimation(projectItems);
  });
  