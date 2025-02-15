function extractData(text) {
    // Regular expression patterns
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/gi;
    const urlRegex = /https?:\/\/(?:www\.)?[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)+(?:\/[^\s]*)?/gi;
    const phoneRegex = /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g;
    const currencyRegex = /\$(?:\d{1,3}(?:,\d{3})*\.\d{2}|\d+\.\d{2})/g;
  
    // Extract matches
    return {
      emails: text.match(emailRegex) || [],
      urls: text.match(urlRegex) || [],
      phones: text.match(phoneRegex) || [],
      currencies: text.match(currencyRegex) || []
    };
  }
  
  // Example usage
  const sampleText = `
  Email addresses: user@example.com, firstname.lastname@company.co.uk.
  URLs: https://www.example.com, http://subdomain.example.org/page.
  Phone numbers: (123) 456-7890, 123-456-7890, 123.456.7890.
  Currency amounts: $19.99, $1,234.56, $1234.56, $123.
  `;
  
  const extractedData = extractData(sampleText);
  
  console.log("Extracted Emails:", extractedData.emails);
  console.log("Extracted URLs:", extractedData.urls);
  console.log("Extracted Phone Numbers:", extractedData.phones);
  console.log("Extracted Currency Amounts:", extractedData.currencies);