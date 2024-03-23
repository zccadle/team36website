// Header
document.getElementById('header-placeholder').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="https://go.ifrc.org/">
            <img src="./../images/logointergrated.png" alt="Logo" height="100">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('home.html') ? 'active' : ''}" href="../html/home.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('requirements.html') ? 'active' : ''}" href="./../html/requirements.html">Requirements</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('research.html') ? 'active' : ''}" href="./../html/research.html">Research</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('ui_design.html') ? 'active' : ''}" href="./../html/ui_design.html">UI Design</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('systemdesign.html') ? 'active' : ''}" href="./../html/systemdesign.html">System Design</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('implementation.html') ? 'active' : ''}" href="./../html/implementation.html">Implementation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('testing.html') ? 'active' : ''}" href="./../html/testing.html">Testing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('evaluation.html') ? 'active' : ''}" href="./../html/evaluation.html">Evaluation</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link ${window.location.pathname.includes('appendix.html') ? 'active' : ''}" href="./../html/appendix.html">Appendix</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
`;
