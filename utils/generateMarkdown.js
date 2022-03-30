// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = "";
  if (license == "Apache license 2.0") {
    licenseBadge = "apache-2.0";
  } else if (license == "Creative Commons license family") {
    licenseBadge = "cc";
  } else if (license == "MIT") {
    licenseBadge = "mit";
  } else if (license == "Do What The F*ck You Want To Public License") {
    licenseBadge = "wtfpl";
  } else {
    licenseBadge = "";
  }
  console.log(licenseBadge);
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license == "Apache license 2.0") {
    licenseLink = "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license = "Creative Commons license family") {
    licenseLink = "https://creativecommons.org/licenses/";
  } else if (license = "MIT") {
    licenseLink = "https://opensource.org/licenses/MIT";
  } else if (license == "Do What The F*ck You Want To Public License") {
    licenseLink = "http://www.wtfpl.net/txt/copying/";
  } else {
    licenseLink = "";
  }
  console.log(licenseLink);
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("creating license section");
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
