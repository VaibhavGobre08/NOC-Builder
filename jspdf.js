
function isDataValid(resumeData) {
  for (const section in resumeData) {
      if (resumeData.hasOwnProperty(section)) {
          if (typeof resumeData[section] === 'object') {
              for (const field in resumeData[section]) {
                  if (resumeData[section].hasOwnProperty(field) && !resumeData[section][field]) {
                      return false; // If any field is empty or null, return false
                  }
              }
          } else if (!resumeData[section]) {
              return false; // If any section is empty or null, return false
          }
      }
  }
  return true; // If all fields have values, return true
}




function generatePDF() {
    
if (isDataValid(resumeData)) {
    // Create a new PDF document
        // const { jsPDF } = window.jspdf
        window.jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF({
            orientation: "p",
            unit: "mm",
            format: [220, 298]
  });

  //Headder
  doc.setFontSize(10);
  doc.setFont('bookman old style','');
  // doc.setLineWidth(1);
  doc.text("Nagar Yuwak Shikshan Sanstha’s",90,6);
  doc.text("Form No YI-01",190,6);
  // 
  doc.setFont('Arial');
  doc.setFontSize(18);
  doc.setTextColor(51, 51, 204);
  doc.text("Yeshwantrao Chavan College of Engineering",50,12);
  doc.setFont('arial','italic');
  doc.setTextColor(192, 0, 0);
  doc.setFontSize(10);
  doc.text("(An Autonomous Institution affiliated to RashtrasantTukadoji Maharaj Nagpur University)",45,16);
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(11);
  doc.setFont('arial','bold');
  doc.text("(Accredited 'A++' Grade by NAAC)",90,20);
  doc.setFontSize(10);
  doc.setFont('bookman old style','');
  doc.text("Hingna Road, Wanadongri, Nagpur - 441 110",80,24);
  doc.text("Ph.: 07104-295083, 295085, Website: www.ycce.edu",78,28);
  doc.setLineWidth(0.3);
  doc.line(0,32,220,32);
  doc.setFont('bookman old style','bold');
  doc.setTextColor(192, 0, 0);
  doc.setFontSize(14);
  doc.text("Office of Dean (Training, Placement & Career Guidance Cell)",48,38);
  doc.line(0,42,220,42);

  //start id and date info
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.setFont('cambria','');
  doc.text("Ref. : YCCE/T&P/2023-24/",25,47);
  doc.text("Date: ",150,47);

  doc.text(73,47,resumeData.personalDetails.branch+"/");
  doc.text(81,47,resumeData.personalDetails.id);
  doc.text(160,47,resumeData.personalDetails.date);

  var x=25;
  // to mess start
  doc.setFont('cambria','bold');
  doc.text("To",x,60);
  doc.text("The Manger-HR",x,65);
  doc.text(x,70,resumeData.companyDetails.companyName+",");
  doc.text(x,75,resumeData.companyDetails.palce+".");

  var a=85;
  var x=25;
  doc.text("Subject:- Intership at your Esteemed Organization.",x,a);

  doc.text("Yeshwantrao  Chavan  College  of  Engineering YCCE  having  permanent   AICTE   ID  1-4736951",x,a+10);
  doc.setFont('cambria','');
  doc.text("established in 1984 is  the flagship Engineering  Institute of Meghe  Group  of  Institutions (MGI), a well-",x,a+15);
  doc.text("known name in the field of Education in Central India creating Mind Share and Human Capital to cater to",x,a+20);
  doc.text("the requirements  of nation  building.",x,a+25);


  doc.setFont('Cambria','bold');

  doc.text("YCCE has been accredited by NAAC with Grade “A++”.",x,a+35);

  doc.setFont('cambria','');

  doc.text("In  the  recently  declared  National  Institute  Ranking  Framework  (NIRF)  by the  Ministry  of  HRD",x,a+45);
  doc.text("Government  of  India for the top  Institutes  which  included  IITs, NITs,  Government Colleges, Private",x,a+50);
  doc.text("and Autonomous   colleges, YCCE  is  ranked  in  TOP  200.",x,a+55);

  doc.text("As our endeavor to continuously  upgrade the technical  skill of our students  we are very much thankful ",x,a+65);
  doc.text("to you for allowing  our student/s (as  per  the   communication   with   Training,   Placement  &  Career",x,a+70);
  doc.text("Guidance  Cell / Department of  Information  Technology) to  undergo   Internship  in  your  esteemed",x,a+75);
  doc.text("organization  as  per the  agreed norms, for a period as  mentioned  below:",x,a+80);



  // 165
var cellHeightBorder = 10;
var xx=24;    //20
var yy=167;  //200

  //table start pasun suru karel
const skillsa =resumeData.skills;
 var count=0;
  for (var i in skillsa){
   count++;
  }
 
  doc.setFontSize(11);
  doc.setFont('cambria','bold');
  var len = count;

  //! table 1 srno
  var data = 'Sr.No';
  // Set the table position and styling
  var startX = xx;
  var startY = yy;
  var cellWidth = 15;
  var cellHeight = cellHeightBorder;
  var cellPadding = 6;
  // Draw table headers and borders
  doc.setDrawColor(0); // Set border color to black
  doc.setLineWidth(0.2);
  doc.rect(startX , startY, cellWidth, cellHeight);
  doc.text(startX + cellPadding-3, startY + cellPadding, data);

 
  //! table 2 srno empty col
  var data =''
  // Set the table position and styling
  var startX = xx;
  var startY = yy+10;
  var cellWidth = 15;
  var cellHeight = 8;
  var cellPadding = 6;
  // Draw table headers and borders
  for (var i = 0; i < len; i++) {
    doc.setDrawColor(0); // Set border color to black
    doc.rect(startX, startY+ i * cellHeight, cellWidth, cellHeight);
    doc.text(startX+ cellPadding, startY+ i * cellHeight + cellPadding, (i+1).toString());
  }

 //! table 3 srno empty col
  var data ='\tCollege \nRegistration ID';
  // Set the table position and styling
  var startX = xx+15;
  var startY = yy;
  var cellWidth = 35;
  var cellHeight = cellHeightBorder;
  var cellPadding = 4;
  // Draw table headers and borders
  doc.setDrawColor(0); // Set border color to black
  doc.rect(startX, startY, cellWidth, cellHeight);
  doc.text(startX+ cellPadding, startY + cellPadding, data);


//! table 4 reg no empty col
 var data =''
 // Set the table position and styling
 var startX = xx+15;
 var startY = yy+10;
 var cellWidth = 35;
 var cellHeight = 8;
 var cellPadding = 6;
 // Draw table headers and borders
 for (var i = 0; i < len; i++) {
   doc.setDrawColor(0); // Set border color to black
   doc.rect(startX, startY+ i * cellHeight, cellWidth, cellHeight);
   doc.text(startX, startY+ i * cellHeight + cellPadding, data);
 }
  
 //! table 5 name 
 var data ='Name of Intern Students';
// Set the table position and styling
var startX = xx+50;
var startY = yy;
var cellWidth = 50;
var cellHeight = cellHeightBorder;
var cellPadding = 6;
// Draw table headers and borders
doc.setDrawColor(0); // Set border color to black
doc.rect(startX , startY, cellWidth, cellHeight);
doc.text(startX+ cellPadding, startY + cellPadding, data);


//! table 6 name no empty col
var data =''
// Set the table position and styling
var startX = xx+50;
var startY = yy+10;
var cellWidth = 50;
var cellHeight = 8;
var cellPadding = 6;

// Draw table headers and borders
for (var i = 0; i < len; i++) {
  doc.setDrawColor(0); // Set border color to black
  doc.rect(startX , startY+ i * cellHeight, cellWidth, cellHeight);
  doc.text(startX+ cellPadding, startY+ i * cellHeight + cellPadding, data);
}

//! table 7 reg no empty col
  var data = 'Semester/Year';

  // Set the table position and styling
  var startX = xx+100;
  var startY = yy;
  var cellWidth = 45;
  var cellHeight = cellHeightBorder;
  var cellPadding = 6;
  // Draw table rows and borders
  
    
      doc.setDrawColor(0); // Set border color to black
      doc.rect(startX , startY, cellWidth, cellHeight);
      doc.text(startX + cellPadding+3, startY + cellPadding, data);
    
  

  //! table 8 it no empty col
  
 var data ='8th Semester / 4th Year'
 // Set the table position and styling
 var startX = xx+100;
 var startY = yy+10;
 var cellWidth = 45;
 var cellHeight = 8;
 var cellPadding = 4;

 // Draw table headers and borders
 for (var i = 0; i < len; i++) {
    
      doc.setDrawColor(0); // Set border color to black
      doc.rect(startX , startY + i * cellHeight, cellWidth, cellHeight);
      doc.text(startX + cellPadding, startY + i * cellHeight + cellPadding, data);
    
  }

  //! table 9 reg no empty col
  var data = 'Engineering Branch';

  // Set the table position and styling
  var startX = xx+145;
  var startY = yy;
  var cellWidth = 40;
  var cellHeight = cellHeightBorder;
  var cellPadding = 6;
  // Draw table rows and borders
  
   
      doc.setDrawColor(0); // Set border color to black
      doc.rect(startX, startY, cellWidth, cellHeight);
      doc.text(startX+ cellPadding-2, startY + cellPadding, data);
    
  

  //! table 10 it no empty col
  
 var data ='B.Tech - '+resumeData.personalDetails.branch
 // Set the table position and styling
 var startX = xx+145;
 var startY = yy+10;
 var cellWidth = 40;
 var cellHeight = 8;
 var cellPadding = 4;

 // Draw table headers and borders
 for (var i = 0; i < len; i++) {
    
      doc.setDrawColor(0); // Set border color to black
      doc.rect(startX , startY + i * cellHeight, cellWidth, cellHeight);
      doc.text(startX + cellPadding+5, startY + i * cellHeight + cellPadding, data);

  }

  //! table 11 it no empty col
  doc.setFontSize(11);
  var data = [
    ['\t\t\tDuration of Internship'],
  ];

  // Set the table position and styling
  var startX = xx;
  var startY = yy+10+(len*8);
  var cellWidth = 100;
  var cellHeight = 8;
  var cellPadding = 5;
  // Draw table rows and borders
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      doc.setDrawColor(0); // Set border color to black
      doc.rect(startX + j * cellWidth, startY + i * cellHeight, cellWidth, cellHeight);
      doc.text(startX + j * cellWidth + cellPadding, startY + i * cellHeight + cellPadding, data[i][j]);
    }
  }
//! table 12 it no empty col
var date = "From "+resumeData.duration.start +" to "+resumeData.duration.start

  // Set the table position and styling
  var startX = xx+100;
  var startY = yy+10+(len*8);
  var cellWidth = 85;
  var cellHeight = 8;
  var cellPadding = 5;

  
  // Draw table rows and borders
  doc.setDrawColor(0); // Set border color to black
  doc.rect(startX, startY, cellWidth, cellHeight);
  doc.text(startX + cellPadding+10, startY + cellPadding, date);
    
   var yyy = yy+25+(len*10);
   //after table content 

   doc.setTextColor(0,0,0);
  doc.setFontSize(12);
  doc.setFont('times new roman','');
  doc.text("Kindly acknowledge and confirm.",xx,yyy);
  doc.text("Thanking you in anticipation.",xx,yyy+10);

  doc.setFont('times new roman','bold');
  doc.text("Dr. Rajesh C. Dharmik",xx+10,yyy+25);
  doc.text("HoD",xx+25,yyy+30);
  doc.setFont('times new roman','');
  doc.text("(Dept. of Information Technology)",xx+3,yyy+35);
  doc.text("Mobile : 9158003335",xx+11,yyy+40);
  doc.text("Email: hod_it@ycce.edu",xx+8,yyy+45);

  doc.setFont('times new roman','bold');
  doc.text("Dr. Gauri Dhopavkar",xx+135,yyy+25);
  doc.text("Dean",xx+148,yyy+30);
  doc.setFont('times new roman','');
  doc.text("(Training, Placement & Career Guidance)",xx+120,yyy+35);
  doc.text("Mobile : 9822087970",xx+138,yyy+40);
  doc.text("Email : dean_tp@ycce.edu",xx+131,yyy+45);


  //footer
  doc.setTextColor(191,191,191);
  doc.setFontSize(10);
  doc.setFont('times new roman','bold');
  doc.text("Vision of IT Dept. To become a well-recognized destination of academic excellence for pursuing Information Technology.",20,280);
  doc.text("Mission of IT Dept. To shape competent, responsible, ethical Information Technology professionals in a facilitative learning",20,285);
  doc.text("environment by inculcating out of box thinking, computational skills and problem- solving abilities",20,290);


  // skills
doc.setTextColor(0,0,0);
doc.setFontSize(11);
doc.setFont('times new roman','bold');
 const skills =resumeData.skills;
 let y=yy+7;
 for (var i in skills){
   y +=8; doc.text(48,y,skills[i]);

 }

// bold
 doc.setFont('Times New Roman','bold');
  // Save or download the PDF
  doc.save('noc.pdf');}





else {
    alert('please fill all required field');
  }

}