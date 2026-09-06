// Open all external links in a new tab
document.addEventListener("DOMContentLoaded", function() {
    var links = document.links;
    for (var i = 0; i < links.length; i++) {
        // If the link is external (hostname doesn't match the site's hostname)
        if (links[i].hostname !== window.location.hostname && links[i].hostname !== '') {
            links[i].target = '_blank';
            links[i].rel = 'noopener noreferrer';
        }
    }
});
