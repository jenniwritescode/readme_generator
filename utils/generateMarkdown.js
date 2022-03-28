// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseCode = "";
  if (license == "Apache license 2.0") {
    licenseCode == "apache-2.0";
  } else if (license == "Creative Commons license family") {
    licenseCode == "cc";
  } else if (license == "MIT") {
    licenseCode == "mit";
  } else if (license == "Do What The F*ck You Want To Public License") {
    licenseCode == "wtfpl";
  } else {
    licenseCode = "";
  }
  return
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
