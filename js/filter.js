document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('#portfolio-flters li');
    const projects = document.querySelectorAll('.portfolio-item');

    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            // Remove active class from all filters
            filters.forEach(f => f.classList.remove('active'));
            // Add active class to the clicked filter
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            projects.forEach(project => {
                if (filterValue === '*' || project.classList.contains(filterValue.replace('.', ''))) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});