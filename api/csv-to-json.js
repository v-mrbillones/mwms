// This script converts CSV to JSON
async function csvToJson(csvUrl) {
  const response = await fetch(csvUrl);
  const csvText = await response.text();
  const lines = csvText.split('\n');
  const headers = lines[0].split(',');
  const result = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue;
    const values = lines[i].split(',');
    const obj = {};
    headers.forEach((header, index) => {
      obj[header.trim()] = values[index] ? values[index].trim() : '';
    });
    result.push(obj);
  }
  
  return result;
}
