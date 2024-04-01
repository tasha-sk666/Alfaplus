export const sectionObserver = () => {
  const sections = document.querySelectorAll("[data-section-observer]");

  if (sections) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          sections.forEach((section) => {
            if(section.id === entry.target.id && !section.classList.contains('active')) {
              section.classList.add('active');
            }
          });
        }
      });
    }, {
      threshold: 0.3,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}
