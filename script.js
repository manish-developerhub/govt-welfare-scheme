function matchSchemes() {
    const income = parseInt(document.getElementById("income").value);
    const region = document.getElementById("region").value;
    const education = document.getElementById("education").value;
  
    const resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";
  
    const matchedSchemes = [];
  
    // Income based
    if (income < 200000) {
      matchedSchemes.push("PM Kisan Samman Nidhi");
      matchedSchemes.push("National Social Assistance Programme (NSAP)");
    }
    if (income < 300000) {
      matchedSchemes.push("Ayushman Bharat (PM-JAY)");
    }
  
    // Region based
    if (region === "rural") {
      matchedSchemes.push("MGNREGA (Rural Employment Guarantee)");
      matchedSchemes.push("Deen Dayal Upadhyaya Grameen Kaushalya Yojana");
    }
    if (region === "urban") {
      matchedSchemes.push("PM Awas Yojana - Urban");
    }
  
    // Education based
    if (education === "none" || education === "primary") {
      matchedSchemes.push("Sarva Shiksha Abhiyan (Education for All)");
      matchedSchemes.push("Mid-Day Meal Scheme");
    }
    if (education === "secondary" || education === "higher") {
      matchedSchemes.push("National Scholarship Portal (NSP)");
    }
  
    // Show results
    if (matchedSchemes.length > 0) {
      matchedSchemes.forEach((scheme) => {
        const item = document.createElement("div");
        item.className = "result-item";
        item.textContent = scheme;
        resultDiv.appendChild(item);
      });
    } else {
      resultDiv.innerHTML =
        "<div class='result-item'>No matching schemes found. Please check your inputs.</div>";
    }
  }
  