// Block right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('Page code and pictures is protected!');
});

// Block developer tools shortcuts
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.ctrlKey && e.shiftKey && e.key === 'J') ||
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
        alert('Developer tools are disabled on this page!');
    }
});