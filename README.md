# Kris Poole's Personal Website

Welcome to the GitHub repository for [krispoole.dev](https://krispoole.dev), Kris Poole's personal website! This site serves as a professional portfolio and blog, showcasing Kris' skills, experiences, and projects. It is built using the [Hugo](https://gohugo.io/) static site generator and deployed on GitHub Pages.

## Table of Contents

- [About the Site](#about-the-site)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## About the Site

The website is divided into several sections, including:

- Home: A brief introduction to Kris Poole
- About: Detailed information about Kris' background, skills, and interests
- Portfolio: A showcase of Kris' projects and accomplishments
- Blog: A collection of technical articles and personal insights written by Kris
- Contact: A form for visitors to get in touch with Kris

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To work with this project, you'll need the following software installed on your computer:

- [Git](https://git-scm.com/)
- [Hugo](https://gohugo.io/getting-started/installing)

### Installation

1. Clone this repository to your local machine:

```git clone https://github.com/krispoole/krispoole.github.io.git```


2. Change to the project directory:

```cd krispoole.github.io```


3. Initialize and update the Git submodules:

```git submodule update --init --recursive```


## Local Development

To start a local development server with live reloading, run the following command from the project root directory:

```hugo server -D```


Open your browser and navigate to `http://localhost:1313` to view the site. Any changes you make to the source files will automatically be reflected in the browser.

## Deployment

The site is deployed on GitHub Pages using the `gh-pages` branch. To deploy a new version of the site, run the following command from the project root directory:

```hugo && git subtree push --prefix public origin gh-pages```


This will build the site and push the generated content to the `gh-pages` branch, which will then be automatically deployed by GitHub Pages.

## Built With

- [Hugo](https://gohugo.io/) - The static site generator used
- [GitHub Pages](https://pages.github.com/) - Hosting platform
- [Hugo Theme](https://bslthemes.com/ryancv-hugo/) - The specific theme used for the site (link to the theme)

## Contributing

This is a personal project, and contributions are not being accepted at this time. Do not copy the theme to this website.

## License

The theme for this project is licensed under the themeforest License - see the [README_License.txt](/themes/ryancv/README_License.txt) file for details.

## Acknowledgments

- Thanks to the creators and contributors of Hugo and the theme used for this site
- Inspiration and support from friends, family, and the developer community
