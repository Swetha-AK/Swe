document.addEventListener("DOMContentLoaded", function() {
    const jobs = [
        { id: 1, title: "Software Engineer", company: "Tech Corp", location: "New York" },
        { id: 2, title: "Project Manager", company: "Business Solutions", location: "San Francisco" },
        { id: 3, title: "Data Analyst", company: "Data Insights", location: "Chicago" },
        { id: 4, title: "Web Developer", company: "Web Works", location: "Los Angeles" },
        { id: 5, title: "System Administrator", company: "IT Services", location: "Seattle" }
    ];

    const featuredJobs = jobs.slice(0, 3);
    const featuredJobList = document.getElementById("featured-job-list");
    const jobList = document.getElementById("job-list");
    const employerJobList = document.getElementById("employer-job-list");
    const applicationForm = document.getElementById("application-form");

    function loadFeaturedJobs() {
        if (featuredJobList) {
            featuredJobs.forEach(job => {
                const listItem = document.createElement("li");
                listItem.textContent = `${job.title} at ${job.company} (${job.location})`;
                featuredJobList.appendChild(listItem);
            });
        }
    }

    function loadJobs() {
        if (jobList) {
            jobList.innerHTML = "";
            jobs.forEach(job => {
                const listItem = document.createElement("li");
                listItem.textContent = `${job.title} at ${job.company} (${job.location})`;
                jobList.appendChild(listItem);
            });
        }
    }

    window.searchJobs = function() {
        const query = document.getElementById("search-bar").value.toLowerCase();
        if (jobList) {
            jobList.innerHTML = "";
            jobs.filter(job => job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query)).forEach(job => {
                const listItem = document.createElement("li");
                listItem.textContent = `${job.title} at ${job.company} (${job.location})`;
                jobList.appendChild(listItem);
            });
        }
    };

    function loadEmployerJobs() {
        if (employerJobList) {
            employerJobList.innerHTML = "";
            jobs.forEach(job => {
                const listItem = document.createElement("li");
                listItem.textContent = `${job.title} at ${job.company} (${job.location})`;
                employerJobList.appendChild(listItem);
            });
        }
    }

    if (applicationForm) {
        applicationForm.addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Application submitted successfully!");
        });
    }

    loadFeaturedJobs();
    loadJobs();
    loadEmployerJobs();
});