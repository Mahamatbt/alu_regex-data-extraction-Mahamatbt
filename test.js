const sampleText = `
Email addresses: user@example.com, firstname.lastname@company.co.uk.
URLs: https://www.example.com, http://subdomain.example.org/page.
Phone numbers: (123) 456-7890, 123-456-7890, 123.456.7890.
Currency amounts: $19.99, $1,234.56, $1234.56.
`;

const extractedData = extractData(sampleText);
console.log('Extracted Emails:', extractedData.emails);
console.log('Extracted URLs:', extractedData.urls);
console.log('Extracted Phone Numbers:', extractedData.phones);
console.log('Extracted Currency Amounts:', extractedData.currencies);