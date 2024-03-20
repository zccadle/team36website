// Header
document.getElementById('header-placeholder').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="https://go.ifrc.org/">
        <img src="./../images/logointergrated.png" alt="Logo" height = "100">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="./../html/index.html">Home</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="./../html/Requirements.html" id="navbarDropdownMenuLink" role="button" aria-expanded="false">
                Requirements
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="./../html/Requirements.html#ProjectBackground">Project Background</a></li>
                <li><a class="dropdown-item" href="./../html/Requirements.html#ClientRequirements">Client Requirements</a></li>
                <li><a class="dropdown-item" href="./../html/Requirements.html#ProjectGoal">Project Goal</a></li>
                <li><a class="dropdown-item" href="./../html/Requirements.html#PersonaAndUseCases">Persona and Use Cases</a></li>
                <li><a class="dropdown-item" href="./../html/Requirements.html#UserInterview">User Interview</a></li>
                <li><a class="dropdown-item" href="./../html/Requirements.html#MOSCOWList">MOSCOW List</a></li>
            </ul>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
`;