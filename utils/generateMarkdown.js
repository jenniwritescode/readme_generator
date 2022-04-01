function generateMarkdown({
  gitname,
  email,
  title,
  description,
  install,
  usage,
  contribute,
  license,
}) {
  let licenseLink = renderLicenseLink(license);
  let licenseBadge = renderLicenseBadge(license);

  return `# ${title}

## Table of contents

- [Description](#description)
- [Installation Instructions](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Contact Info](#contact)
- [Copyright and license](#copyright-and-license)

## Description

${description}

## Installation Instructions

      ${install}

## Usage

${usage}

## Contributing

${contribute}

## Contact Info

My GitHub Username is **${gitname}**.
Please contact me via email with additional questions.

- [My GitHub](https://github.com/${gitname})
- [Email](mailto:${email})

## Copyright and license

Code and documentation: copyright 2022 ${gitname}. 
Code released under the ${license} license.
[![License](${licenseBadge})](${licenseLink})
`;
}

function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license == "Apache license 2.0") {
    licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  } else if (license == "Creative Commons license family") {
    licenseBadge = "https://licensebuttons.net/l/zero/1.0/80x15.png";
  } else if (license == "MIT") {
    licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (license == "Do What The F*ck You Want To Public License") {
    licenseBadge = "https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

function renderLicenseLink(license) {
  let licenseLink = "";
  if (license == "Apache license 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if ((license = "Creative Commons license family")) {
    licenseLink = "https://creativecommons.org/licenses/";
  } else if ((license = "MIT")) {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license == "Do What The F*ck You Want To Public License") {
    licenseLink = "http://www.wtfpl.net/txt/copying/";
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

module.exports = generateMarkdown;
