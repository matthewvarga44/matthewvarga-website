import { useEffect } from 'react';

export default function Workbook() {
  useEffect(() => {
    // Load the static workbook HTML
    fetch('/workbook.html')
      .then(response => response.text())
      .then(html => {
        // Replace the entire page content with the workbook HTML
        document.documentElement.innerHTML = html;
      })
      .catch(error => {
        console.error('Failed to load workbook:', error);
        document.body.innerHTML = '<p>Error loading workbook. Please try again.</p>';
      });
  }, []);

  return null; // This component doesn't render anything; it loads the static HTML
}
