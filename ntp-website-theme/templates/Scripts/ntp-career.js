//DropDown-Location API
// document.addEventListener("DOMContentLoaded", () => {
//   // fetch("https://testing-jmrx.onrender.com/api/getcurrentjobs/job-list") // Replace with your API endpoint
//   fetch('{{ get_asset_url("../../assets/data/career-data.json") }}') // Replace with your API endpoint
//     .then((response) => {
//       console.log("response", response);
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("data", data);

//       const dropdown1 = document.getElementById("dropdown1");
//       data?.job_data.forEach((item) => {
//         const option = document.createElement("option");
//         option.value = item.job_title; // Assuming job_title is the field name in the response
//         option.textContent = item.job_title;
//         dropdown1.appendChild(option);
//       });
//     })
//     .catch((error) => {
//       console.log('error',error)
//       console.error("There was a problem with the fetch operation:", error);
//     });
// });

// //DropDown-Job API
// document.addEventListener("DOMContentLoaded", () => {
//   // fetch("https://testing-jmrx.onrender.com/api/getcurrentjobs/location-list") // Replace with your API endpoint
//   fetch('{{ get_asset_url("../../assets/data/career-data.json") }}') // Replace with your API endpoint
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok " + response.statusText);
//       }
//       return response.json();
//     })
//     .then((data) => {
//       const dropdown2 = document.getElementById("dropdown2");
//       data?.location_data.forEach((item) => {
//         const option = document.createElement("option");
//         option.value = item.job_location; // Assuming job_title is the field name in the response
//         option.textContent = item.job_location;
//         dropdown2.appendChild(option);
//       });
//     })
//     .catch((error) => {
//       console.error("There was a problem with the fetch operation:", error);
//     });
// });

// GEt & Search Jobs api

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("dataForm");
  const resultDiv = document.getElementById("result");
  const cardTemplate = document.getElementById("card-template").content;
  const archiveResultDiv = document.getElementById("archive-result");
  const exploreArchiveButton = document.getElementById("explore-archive");

  let currentlyOpenCard = null;
  // Function to fetch and display jobs based on search criteria
  // const fetchAndDisplayJobs = async (postData) => {
  //   try {
  //     const response = await fetch(
  //       "https://testing-jmrx.onrender.com/api/getcurrentjobs/search-list",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(postData),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok " + response.statusText);
  //     }

  //     const data = await response.json();
  //     if (data?.data.length == 0) {
  //       // Clear existing cards
  //       resultDiv.innerHTML = "";
  //       // Display "No Results Found" message
  //       const noResultsPara = document.createElement("p");
  //       noResultsPara.textContent = "No Results Found";
  //       resultDiv.appendChild(noResultsPara);
  //     } else {
  //       // Clear existing cards
  //       resultDiv.innerHTML = "";

  //       // Track currently open card if using accordion style
  //       let currentlyOpenCard = null;

  //       data?.data.forEach((item) => {
  //         // Clone the card template
  //         const card = cardTemplate.cloneNode(true);

  //         // Update card title and location
  //         card.querySelector(".card-title").textContent = item.job_title;
  //         card.querySelector(".card-location").textContent = item.job_location;

  //         // Populate responsibilities
  //         const responsibilitiesList = card.querySelector(".responsibilities");
  //         const responsibilities = item.job_responsibility.split("\n");
  //         responsibilities.forEach((responsibility) => {
  //           const li = document.createElement("li");
  //           li.textContent = responsibility;
  //           responsibilitiesList.appendChild(li);
  //         });

  //         // Populate requirements
  //         const requirementsList = card.querySelector(".requirements");
  //         const requirements = item.job_requirements.split("\n");
  //         requirements.forEach((requirement) => {
  //           const li = document.createElement("li");
  //           li.textContent = requirement;
  //           requirementsList.appendChild(li);
  //         });

  //         // Add event listener for accordion toggle on header click
  //         const header = card.querySelector(".accordion-header");
  //         const content = card.querySelector(".accordion-content");
  //         header.addEventListener("click", () => {
  //           if (currentlyOpenCard && currentlyOpenCard !== content) {
  //             currentlyOpenCard.classList.add("hidden");
  //             currentlyOpenCard.previousElementSibling.querySelector(
  //               ".accordion-icon"
  //             ).textContent = "+";
  //           }
  //           content.classList.toggle("hidden");
  //           header.querySelector(".accordion-icon").textContent =
  //             content.classList.contains("hidden") ? "+" : "-";
  //           currentlyOpenCard = content.classList.contains("hidden")
  //             ? null
  //             : content;
  //         });

  //         // Add event listener for accordion toggle on button click
  //         const button = card.querySelector(".apply-button");
  //         button.addEventListener("click", (event) => {
  //           window.location.href = "/contact-dev";
  //           // Handle button click action here
  //           console.log("Apply Now clicked for job:", item.job_title);
  //           event.stopPropagation(); // Prevent the click event from bubbling to the card header
  //         });

  //         // Append the updated card to the resultDiv
  //         resultDiv.appendChild(card);
  //       });
  //     }
  //   } catch (error) {
  //     console.error("There was a problem with the fetch operation:", error);
  //   }
  // };

  // // Handle form submit event
  // form.addEventListener("submit", async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(form);
  //   const postData = {
  //     job_title: formData.get("dropdown1"),
  //     job_location: formData.get("dropdown2"),
  //   };

  //   // Fetch and display jobs based on search criteria
  //   await fetchAndDisplayJobs(postData);
  // });

  // Function to initially load all job cards
  const loadAllJobs = async () => {
    try {
      const response = await fetch(
        "https://yakuea9rwc.execute-api.us-east-2.amazonaws.com/simplifai-activejobs  "
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
  
      console.log("Fetching job response data...", response);
      const data = await response.json();
      console.log("Fetching data...", data);
  
      // Clear existing cards
      resultDiv.innerHTML = "";
  
      data?.data.forEach((item) => {
        if (item.publishToExternalChannels === false) {
          return;
        }
        // Clone the card template
        const card = cardTemplate.cloneNode(true);
        console.log("Fetching job Array data...", item);
  
        // Update card title and location
        card.querySelector(".card-title").textContent = item.jobtitle;
        card.querySelector(".card-location").textContent = item.location;
  
        // Populate responsibilities
        const responsibilitiesList = card.querySelector(".responsibilities");
        const rawResponsibilities = item.responsibilities || "";
  
        // Parse HTML to extract text
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = rawResponsibilities;
  
        // Split responsibilities into individual items
        const responsibilities = tempDiv.textContent.split(".");
        responsibilities.forEach((responsibility) => {
          if (responsibility.trim()) {
            const li = document.createElement("li");
            li.textContent = responsibility.trim() + "."; // Add period back
            responsibilitiesList.appendChild(li);
          }
        });
  
        // Populate requirements
        const requirementsList = card.querySelector(".requirements");
        const rawRequirements = item.requirement || "";
  
        const tempDivReq = document.createElement("div");
        tempDivReq.innerHTML = rawRequirements;
  
        const requirements = tempDivReq.textContent.split(".");
        requirements.forEach((requirement) => {
          if (requirement.trim()) {
            const li = document.createElement("li");
            li.textContent = requirement.trim() + "."; // Add period back
            requirementsList.appendChild(li);
          }
        });
  
        // Add event listener for accordion toggle on header click
        const header = card.querySelector(".accordion-header");
        const content = card.querySelector(".accordion-content");
        header.addEventListener("click", () => {
          if (currentlyOpenCard && currentlyOpenCard !== content) {
            currentlyOpenCard.classList.add("hidden");
            currentlyOpenCard.previousElementSibling.querySelector(
              ".accordion-icon"
            ).textContent = "+";
          }
          content.classList.toggle("hidden");
          header.querySelector(".accordion-icon").textContent =
            content.classList.contains("hidden") ? "+" : "-";
          currentlyOpenCard = content.classList.contains("hidden")
            ? null
            : content;
        });
  
        // Append the updated card to the resultDiv
        resultDiv.appendChild(card);
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  const loadArchiveJobs = async () => {
    try {
      const response = await fetch(
        "https://yakuea9rwc.execute-api.us-east-2.amazonaws.com/simplifai-archivejobs  "
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      } 
      // Clear existing cards
      archiveResultDiv.innerHTML = "";
  
      data?.data.forEach((item) => {
        if (item.publishToExternalChannels === false) {
          return;
        }
        // Clone the card template
        const card = cardTemplate.cloneNode(true);
        console.log("Fetching job Array data...", item);
  
        // Update card title and location
        card.querySelector(".card-title").textContent = item.jobtitle;
        card.querySelector(".card-location").textContent = item.location;
  
        // Populate responsibilities
        const responsibilitiesList = card.querySelector(".responsibilities");
        const rawResponsibilities = item.responsibilities || "";
  
        // Parse HTML to extract text
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = rawResponsibilities;
  
        // Split responsibilities into individual items
        const responsibilities = tempDiv.textContent.split(".");
        responsibilities.forEach((responsibility) => {
          if (responsibility.trim()) {
            const li = document.createElement("li");
            li.textContent = responsibility.trim() + "."; // Add period back
            responsibilitiesList.appendChild(li);
          }
        });
  
        // Populate requirements
        const requirementsList = card.querySelector(".requirements");
        const rawRequirements = item.requirement || "";
  
        const tempDivReq = document.createElement("div");
        tempDivReq.innerHTML = rawRequirements;
  
        const requirements = tempDivReq.textContent.split(".");
        requirements.forEach((requirement) => {
          if (requirement.trim()) {
            const li = document.createElement("li");
            li.textContent = requirement.trim() + "."; // Add period back
            requirementsList.appendChild(li);
          }
        });
  
        // Add event listener for accordion toggle on header click
        const header = card.querySelector(".accordion-header");
        const content = card.querySelector(".accordion-content");
        header.addEventListener("click", () => {
          if (currentlyOpenCard && currentlyOpenCard !== content) {
            currentlyOpenCard.classList.add("hidden");
            currentlyOpenCard.previousElementSibling.querySelector(
              ".accordion-icon"
            ).textContent = "+";
          }
          content.classList.toggle("hidden");
          header.querySelector(".accordion-icon").textContent =
            content.classList.contains("hidden") ? "+" : "-";
          currentlyOpenCard = content.classList.contains("hidden")
            ? null
            : content;
        });
  
        // Append the updated card to the archiveResultDiv
        archiveResultDiv.appendChild(card);
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  // Load all jobs initially
  loadAllJobs();

  exploreArchiveButton.addEventListener("click", () => {
    loadArchiveJobs();
  });
});

