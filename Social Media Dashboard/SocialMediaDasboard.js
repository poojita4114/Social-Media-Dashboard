document.addEventListener('DOMContentLoaded', () => {
    const postForm = document.getElementById('post-form');
    const scheduledPostsList = document.getElementById('scheduled-posts-list');

    const scheduledPosts = [];

    // Handle form submission
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const platform = document.getElementById('platform').value;
        const content = document.getElementById('content').value;
        const scheduleDate = document.getElementById('schedule-date').value;

        const post = {
            platform,
            content,
            scheduleDate
        };

        scheduledPosts.push(post);
        renderScheduledPosts();
        postForm.reset();
    });

    // Render scheduled posts
    function renderScheduledPosts() {
        scheduledPostsList.innerHTML = '';
        scheduledPosts.forEach(post => {
            const postItem = document.createElement('li');
            postItem.textContent = `${post.platform}: ${post.content} (Scheduled for: ${post.scheduleDate})`;
            scheduledPostsList.appendChild(postItem);
        });
    }

    // Engagement Metrics Chart
    const ctx = document.getElementById('engagementChart').getContext('2d');
    const engagementChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Twitter', 'Facebook', 'Instagram'],
            datasets: [{
                label: 'Engagements',
                data: [120, 150, 180],
                backgroundColor: [
                    'rgba(29, 161, 242, 0.2)',
                    'rgba(59, 89, 152, 0.2)',
                    'rgba(225, 48, 108, 0.2)'
                ],
                borderColor: [
                    'rgba(29, 161, 242, 1)',
                    'rgba(59, 89, 152, 1)',
                    'rgba(225, 48, 108, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
