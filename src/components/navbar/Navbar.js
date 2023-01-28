import './navbar.css'

export default function Navbar() {
  return(
    <nav id="navbar">
      <i class="fa-solid fa-code navcodeicon" style="font-size: 50px;"></i>
      <a class="navlink" href="#projects">Projects</a>
      <a id="profile-link" class="showgh" rel="noreferrer" target="_blank" href="https://github.com/PaulSess">
        <a id="profile-link2" target="_blank" rel="noreferrer" href="https://github.com/PaulSess">
          <img src="./images/Github.png" alt="github link" />
        </a>
        <img src="./images/github.svg" alt="github link" />
      </a>

    </nav>

  )

}
