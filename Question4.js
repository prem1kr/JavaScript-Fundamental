function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);

    if (match) {
        return {
            fullMatch: match[0],  
            groups: match.slice(1)
        };
    } else {
        return null; 
    }
}

const datePattern = '(\\d{2})-(\\d{2})-(\\d{4})'; 
const dateString = "The event is scheduled for 25-08-2024.";

const result = extractGroups(datePattern, dateString);

if (result) {
    console.log("Full Match:", result.fullMatch);
    console.log("Day:", result.groups[0]);
    console.log("Month:", result.groups[1]);
    console.log("Year:", result.groups[2]);
} else {
    console.log("No match found.");
}
