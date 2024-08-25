<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">DISNEYPLUS-CLONE</h1>
</p>
<p align="center">
    <em><code>► Clone of the Disney+ Application Design</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Rastilan/Disneyplus-Clone?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Rastilan/Disneyplus-Clone?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Rastilan/Disneyplus-Clone?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Rastilan/Disneyplus-Clone?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=flat&logo=Firebase&logoColor=black" alt="Firebase">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=flat&logo=styled-components&logoColor=white" alt="styledcomponents">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<br>
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/GitHub%20Actions-2088FF.svg?style=flat&logo=GitHub-Actions&logoColor=white" alt="GitHub%20Actions">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running Disneyplus-Clone](#-running-Disneyplus-Clone)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

<code>► Login using firebase auth with Google and view the interface. Do note that this does not provide any access to any content like Movies or Shows.</code>

---

##  Features

<code>
► Firebase Login using Google Auth
► Redux for user state
► Animations to mimic Disney+
</code>

---

##  Repository Structure

```sh
└── Disneyplus-Clone/
    ├── .github
    │   └── workflows
    │       ├── firebase-hosting-merge.yml
    │       └── firebase-hosting-pull-request.yml
    ├── README.md
    ├── database.rules.json
    ├── firebase.json
    ├── firestore.indexes.json
    ├── firestore.rules
    ├── functions
    │   ├── .eslintrc.js
    │   ├── .gitignore
    │   ├── index.js
    │   ├── package-lock.json
    │   └── package.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── imgs
    │   │   ├── cta-logo-one.svg
    │   │   ├── cta-logo-two.png
    │   │   ├── favicon.svg
    │   │   ├── group-icon.png
    │   │   ├── home-background.png
    │   │   ├── home-icon.svg
    │   │   ├── login-background.jpg
    │   │   ├── logo.svg
    │   │   ├── movie-icon.svg
    │   │   ├── original-icon.svg
    │   │   ├── play-icon-black.png
    │   │   ├── play-icon-white.png
    │   │   ├── search-icon.svg
    │   │   ├── series-icon.svg
    │   │   ├── slider-badag.jpg
    │   │   ├── slider-badging.jpg
    │   │   ├── slider-scale.jpg
    │   │   ├── slider-scales.jpg
    │   │   ├── viewers-disney.png
    │   │   ├── viewers-marvel.png
    │   │   ├── viewers-national.png
    │   │   ├── viewers-pixar.png
    │   │   ├── viewers-starwars.png
    │   │   └── watchlist-icon.svg
    │   ├── index.html
    │   └── vids
    │       ├── 1564674844-disney.mp4
    │       ├── 1564676115-marvel.mp4
    │       ├── 1564676296-national-geographic.mp4
    │       ├── 1564676714-pixar.mp4
    │       └── 1608229455-star-wars.mp4
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── app
    │   │   └── store.jsx
    │   ├── components
    │   │   ├── Detail.jsx
    │   │   ├── Header.jsx
    │   │   ├── Home.jsx
    │   │   ├── ImgSlider.jsx
    │   │   ├── Login.jsx
    │   │   ├── NewDisney.jsx
    │   │   ├── Originals.jsx
    │   │   ├── Recommends.jsx
    │   │   ├── Trending.jsx
    │   │   └── Viewers.jsx
    │   ├── features
    │   │   ├── movie
    │   │   │   └── movieSlice.jsx
    │   │   └── user
    │   │       └── userSlice.jsx
    │   ├── firebase.jsx
    │   ├── index.css
    │   └── main.jsx
    └── vite.config.js
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                      | Summary                         |
| ---                                                                                                       | ---                             |
| [index.html](https://github.com/Rastilan/Disneyplus-Clone/blob/master/index.html)                         | <code>► INSERT-TEXT-HERE</code> |
| [database.rules.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/database.rules.json)       | <code>► INSERT-TEXT-HERE</code> |
| [vite.config.js](https://github.com/Rastilan/Disneyplus-Clone/blob/master/vite.config.js)                 | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/package.json)                     | <code>► INSERT-TEXT-HERE</code> |
| [firebase.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/firebase.json)                   | <code>► INSERT-TEXT-HERE</code> |
| [firestore.rules](https://github.com/Rastilan/Disneyplus-Clone/blob/master/firestore.rules)               | <code>► INSERT-TEXT-HERE</code> |
| [package-lock.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/package-lock.json)           | <code>► INSERT-TEXT-HERE</code> |
| [firestore.indexes.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/firestore.indexes.json) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>public</summary>

| File                                                                                     | Summary                         |
| ---                                                                                      | ---                             |
| [index.html](https://github.com/Rastilan/Disneyplus-Clone/blob/master/public/index.html) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>.github.workflows</summary>

| File                                                                                                                                              | Summary                         |
| ---                                                                                                                                               | ---                             |
| [firebase-hosting-pull-request.yml](https://github.com/Rastilan/Disneyplus-Clone/blob/master/.github/workflows/firebase-hosting-pull-request.yml) | <code>► INSERT-TEXT-HERE</code> |
| [firebase-hosting-merge.yml](https://github.com/Rastilan/Disneyplus-Clone/blob/master/.github/workflows/firebase-hosting-merge.yml)               | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>functions</summary>

| File                                                                                                      | Summary                         |
| ---                                                                                                       | ---                             |
| [.eslintrc.js](https://github.com/Rastilan/Disneyplus-Clone/blob/master/functions/.eslintrc.js)           | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/functions/package.json)           | <code>► INSERT-TEXT-HERE</code> |
| [index.js](https://github.com/Rastilan/Disneyplus-Clone/blob/master/functions/index.js)                   | <code>► INSERT-TEXT-HERE</code> |
| [package-lock.json](https://github.com/Rastilan/Disneyplus-Clone/blob/master/functions/package-lock.json) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src</summary>

| File                                                                                      | Summary                         |
| ---                                                                                       | ---                             |
| [App.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/App.jsx)           | <code>► INSERT-TEXT-HERE</code> |
| [App.css](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/App.css)           | <code>► INSERT-TEXT-HERE</code> |
| [firebase.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/firebase.jsx) | <code>► INSERT-TEXT-HERE</code> |
| [index.css](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/index.css)       | <code>► INSERT-TEXT-HERE</code> |
| [main.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/main.jsx)         | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.components</summary>

| File                                                                                                     | Summary                         |
| ---                                                                                                      | ---                             |
| [ImgSlider.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/ImgSlider.jsx)   | <code>► INSERT-TEXT-HERE</code> |
| [Viewers.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Viewers.jsx)       | <code>► INSERT-TEXT-HERE</code> |
| [Login.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Login.jsx)           | <code>► INSERT-TEXT-HERE</code> |
| [NewDisney.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/NewDisney.jsx)   | <code>► INSERT-TEXT-HERE</code> |
| [Home.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Home.jsx)             | <code>► INSERT-TEXT-HERE</code> |
| [Recommends.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Recommends.jsx) | <code>► INSERT-TEXT-HERE</code> |
| [Originals.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Originals.jsx)   | <code>► INSERT-TEXT-HERE</code> |
| [Header.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Header.jsx)         | <code>► INSERT-TEXT-HERE</code> |
| [Trending.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Trending.jsx)     | <code>► INSERT-TEXT-HERE</code> |
| [Detail.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/components/Detail.jsx)         | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.features.movie</summary>

| File                                                                                                         | Summary                         |
| ---                                                                                                          | ---                             |
| [movieSlice.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/features/movie/movieSlice.jsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.features.user</summary>

| File                                                                                                      | Summary                         |
| ---                                                                                                       | ---                             |
| [userSlice.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/features/user/userSlice.jsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>src.app</summary>

| File                                                                                    | Summary                         |
| ---                                                                                     | ---                             |
| [store.jsx](https://github.com/Rastilan/Disneyplus-Clone/blob/master/src/app/store.jsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

###  Installation

1. Clone the Disneyplus-Clone repository:

```sh
git clone https://github.com/Rastilan/Disneyplus-Clone
```

2. Change to the project directory:

```sh
cd Disneyplus-Clone
```

3. Install the dependencies:

```sh
npm install
```

###  Running Disneyplus-Clone

Use the following command to run Disneyplus-Clone:

```sh
npm run dev
```

---

##  Project Roadmap

- [X] `► App is completed and working`
- [ ] `► Fix Typos`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Rastilan/Disneyplus-Clone/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Rastilan/Disneyplus-Clone/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Rastilan/Disneyplus-Clone/issues)**: Submit bugs found or log feature requests for Disneyplus-clone.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Rastilan/Disneyplus-Clone
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
