import moment from "moment/moment";
import Papa from 'papaparse';
import * as XLSX from 'xlsx-js-style';
import { saveAs } from 'file-saver';

const capitalizeFirstLetter = (str) => {
    return str ? str && str.charAt(0).toUpperCase() + str.slice(1):'';
}

const validateAndUploadImage = (e) => {
  if (e && (e.target || e.files)) {
    const file = e?.target?.files?.[0] || e?.files?.[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"];
      
      if (validTypes.includes(file.type)) {
        return {
          uploadProfile: URL.createObjectURL(file),
          file,
          fileName: file.name,
          previewUrl: URL.createObjectURL(file),
          error: '',
        };
      } else {
        return {
          uploadProfile: '',
          file: null,
          fileName: '',
          previewUrl: '',
          error: 'Please upload a .jpg, .jpeg, .png, or .svg file.',
        };
      }
    }
  }

  // If no file is selected or e is undefined, return an error
  return {
    uploadProfile: '',
    file: null,
    fileName: '',
    previewUrl: '',
    error: 'No file selected.',
  };
};

export function formatEventDates(fromDate, toDate) {
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const from = new Date(fromDate);
  const to = new Date(toDate);

  const fromMonth = monthNames[from.getUTCMonth()];
  const fromDay = from.getUTCDate();
  const fromYear = from.getUTCFullYear();

  const toMonth = monthNames[to.getUTCMonth()];
  const toDay = to.getUTCDate();
  const toYear = to.getUTCFullYear();

  // Check if the event spans multiple months
  if (fromMonth === toMonth && fromYear === toYear) {
    // If the same month and year, output like "April 30 – May 2, 2024"
    return `${fromMonth} ${fromDay} – ${toDay}, ${fromYear}`;
  } else if (fromYear === toYear) {
    // If different months but the same year
    return `${fromMonth} ${fromDay} – ${toMonth} ${toDay}, ${fromYear}`;
  } else {
    // If even the years are different
    return `${fromMonth} ${fromDay}, ${fromYear} – ${toMonth} ${toDay}, ${toYear}`;
  }
}

const formatTime=(times)=> {
    let time = moment(times, 'HH:mm:ss');
    time = new Date(time)
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 === 0 ? 12 : hours % 12;
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
  }

const convertToMidnight = (date) => {
    if(!date){
      return null
    }
    const isValid = moment(date).isValid();
    if(isValid){
      const formattedDate = moment(date).format('MM/DD/YYYY')
      const dateObj = moment(formattedDate).format('YYYY-MM-DDTHH:mm:ss[Z]')
      return dateObj
    }
    return null
  }

  const clearAllCookies = () => {
    const cookies = document.cookie.split(';');
  
    for (const cookie of cookies) {
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  };

  const downloadCSV = (mainData, fileName) => {
    const csv = Papa.unparse(mainData);
    const csvBlob = new Blob([csv], { type: "text/csv" });
    const csvUrl = URL.createObjectURL(csvBlob);
    const link = document.createElement("a");
    link.href = csvUrl;
    link.download = `${fileName}.csv`
    link.click();
    URL.revokeObjectURL(csvUrl);
  }

  export const calculateColumnWidths = (data) => {
    const headers = Object.keys(data[0] || {});
    const widths = new Array(headers.length).fill(0);
  
    // Check header lengths
    headers.forEach((header, index) => {
      widths[index] = Math.max(widths[index], header.length);
    });
  
    // Check data lengths
    data.forEach(row => {
      Object.values(row).forEach((value, index) => {
        const valueLength = String(value).length;
        widths[index] = Math.max(widths[index], valueLength);
      });
    });
  
    // Add some padding and convert to Excel column widths
    return widths.map(width => ({ wch: width + 2 }));
  };

  const downloadExcel = (educationLeaders,expertNetworkLeaders,solutionProviders,solutionProviderLeaders,sponsors,strategicCollaborators,events,conveningsDetails, name) => {
  // console.log('name:', name);
  // console.log('conveningsDetails:', conveningsDetails);
  // console.log('events:', events);
  // console.log('strategicCollaborators:', strategicCollaborators);
  // console.log('sponsors:', sponsors);
  // console.log('solutionProviderLeaders:', solutionProviderLeaders);
  // console.log('solutionProviders:', solutionProviders);
  // console.log('expertNetworkLeaders:', expertNetworkLeaders);
  // console.log('educationLeaders:', educationLeaders);
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
  
    // Helper to add data to a worksheet and append it to the workbook
    const addSheetToWorkbook = (data, sheetName) => {
      const worksheet = XLSX.utils.json_to_sheet(data); 
      worksheet['!cols'] = calculateColumnWidths(data);

      // Add cell styles for headers
      const headers = Object.keys(data[0] || {});
      headers.forEach((_, index) => {
        const cellRef = XLSX.utils.encode_cell({ r: 0, c: index });
        worksheet[cellRef].s = { font: { bold: true } };
      });
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName); // Append sheet to workbook
    };
  
    // Add each category as a separate sheet
    addSheetToWorkbook(conveningsDetails, 'Convening Details');
    if(educationLeaders?.length){ 
      addSheetToWorkbook(educationLeaders, 'Education Leaders');
    }
    if(expertNetworkLeaders?.length){
      addSheetToWorkbook(expertNetworkLeaders, 'Expert Network');
    }
    if(solutionProviders?.length){
      addSheetToWorkbook(solutionProviders, 'Solution Providers');
    }

    if(solutionProviderLeaders?.length){
      addSheetToWorkbook(solutionProviderLeaders, 'Solution Provider Leaders');
    }

    if(sponsors?.length){
      addSheetToWorkbook(sponsors, 'Sponsors');
    }

    if(strategicCollaborators?.length){
      addSheetToWorkbook(strategicCollaborators, 'Strategic Collaborators');
    }
    if(events?.length){
      addSheetToWorkbook(events, 'Events');
    }
  
    // Generate the Excel file and download it
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `${name}.xlsx`);
  }
export { formatTime , convertToMidnight, validateAndUploadImage, clearAllCookies, downloadCSV, downloadExcel, capitalizeFirstLetter}