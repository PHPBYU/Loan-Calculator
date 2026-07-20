document.getElementById('startDate').valueAsDate = new Date();
document.getElementById('today-stamp').textContent = new Date().toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

var currentLang = 'en';

var i18n = {
  en: {
    title: 'Amortization Ledger',
    subtitle: 'Loan repayment schedule',
    cardParticulars: 'Loan particulars',
    lblLoanType: 'Loan type',
    lblLoanAmount: 'Loan amount',
    lblDuration: 'Duration (number of periods)',
    durationHint: "Total number of scheduled payments over the loan's life.",
    lblRate: 'Interest rate per period (%)',
    lblPlan: 'Pay plan',
    lblStartDate: 'Start date (first payment)',
    optNormal: 'Normal loan',
    optOnetime: 'One time interest',
    optHalfoff: '50% off',
    optZero: '0 interest',
    optMonthly: 'Monthly (same date each month)',
    optBiweekly: 'Every 2 weeks',
    btnGenerate: 'Generate schedule',
    cardSummary: 'Summary',
    stampLabel: 'Total interest',
    statLoan: 'Loan amount',
    statCount: 'Number of payments',
    statInterest: 'Total interest',
    statTotal: 'Total paid back',
    btnExportExcel: 'Export to Excel',
    btnExportPDF: 'Export to PDF',
    pdfNote: 'PDF export uses English labels; Khmer text is not supported by the PDF font engine.',
    cardSchedule: 'Schedule',
    emptyNote: 'Enter loan details above and generate the schedule.',
    errorFill: 'Please fill in loan amount, duration, and start date.',
    errorGenerateFirst: 'Please generate a schedule first.',
    thNum: '#', thDate: 'Due date', thBegin: 'Beginning balance', thPrincipal: 'Principal',
    thInterest: 'Interest', thPayment: 'Payment', thEnd: 'Ending balance',
    typeHints: {
      normal: 'Interest = remaining principal &times; rate each period. Principal is split evenly; the last payment absorbs any rounding.',
      onetime: 'The full loan amount plus interest (loan amount &times; rate) is repaid in a single payment on the start date, regardless of duration or payback plan.',
      halfoff: 'Same as normal loan, but only 50% of the computed interest is charged.',
      zero: 'No interest is charged on any payment.'
    },
    planHint: {
      monthly: 'Payments fall on the same day each month (e.g. 7/17/2026 \u2192 8/17/2026).',
      biweekly: 'Payments fall every 14 days from the start date. Duration is the number of biweekly payments.'
    },
    rateHint: {
      monthly: 'Applied once per payment as the monthly rate, since Pay plan is Monthly.',
      biweekly: 'Applied once per payment as the 2-week rate, since Pay plan is Every 2 weeks.'
    },
    pdfTitle: 'Loan amortization schedule',
    metaLoanAmount: 'Loan amount', metaLoanType: 'Loan type', metaDuration: 'Duration (periods)',
    metaRate: 'Interest rate per period (%)', metaPlan: 'Pay plan', metaStartDate: 'Start date',
    metaNumPayments: 'Number of payments', metaTotalInterest: 'Total interest', metaTotalPaid: 'Total paid back'
  },
  km: {
    title: 'សៀវភៅបញ្ជីបង់រំលស់',
    subtitle: 'កាលវិភាគសងប្រាក់កម្ចី',
    cardParticulars: 'ព័ត៌មានលម្អិតអំពីប្រាក់កម្ចី',
    lblLoanType: 'ប្រភេទប្រាក់កម្ចី',
    lblLoanAmount: 'ចំនួនប្រាក់កម្ចី',
    lblDuration: 'រយៈពេល (ចំនួនដំណាក់កាល)',
    durationHint: 'ចំនួនសរុបនៃការទូទាត់ដែលបានកំណត់ពេលវេលាពេញមួយអាយុកាលនៃប្រាក់កម្ចី។',
    lblRate: 'អត្រាការប្រាក់ក្នុងមួយដំណាក់កាល (%)',
    lblPlan: 'ផែនការទូទាត់',
    lblStartDate: 'កាលបរិច្ឆេទចាប់ផ្តើម (ការទូទាត់ដំបូង)',
    optNormal: 'ប្រាក់កម្ចីធម្មតា',
    optOnetime: 'ការប្រាក់ម្តងតែម្តង',
    optHalfoff: 'បញ្ចុះ៥០%',
    optZero: 'គ្មានការប្រាក់',
    optMonthly: 'ប្រចាំខែ (ថ្ងៃដូចគ្នារាល់ខែ)',
    optBiweekly: 'រៀងរាល់ ២ សប្តាហ៍',
    btnGenerate: 'បង្កើតកាលវិភាគ',
    cardSummary: 'សេចក្តីសង្ខេប',
    stampLabel: 'ការប្រាក់សរុប',
    statLoan: 'ចំនួនប្រាក់កម្ចី',
    statCount: 'ចំនួនការទូទាត់',
    statInterest: 'ការប្រាក់សរុប',
    statTotal: 'ចំនួនទឹកប្រាក់សរុបបានសង',
    btnExportExcel: 'នាំចេញទៅ Excel',
    btnExportPDF: 'នាំចេញទៅ PDF',
    pdfNote: 'ឯកសារ PDF ប្រើស្លាកជាភាសាអង់គ្លេស ដោយសារពុម្ពអក្សរ PDF មិនអាចបង្ហាញអក្សរខ្មែរបានទេ។',
    cardSchedule: 'កាលវិភាគ',
    emptyNote: 'សូមបញ្ចូលព័ត៌មានប្រាក់កម្ចីខាងលើ រួចបង្កើតកាលវិភាគ។',
    errorFill: 'សូមបំពេញចំនួនប្រាក់កម្ចី រយៈពេល និងកាលបរិច្ឆេទចាប់ផ្តើម។',
    errorGenerateFirst: 'សូមបង្កើតកាលវិភាគជាមុនសិន។',
    thNum: '#', thDate: 'កាលបរិច្ឆេទត្រូវទូទាត់', thBegin: 'សមតុល្យដើមគ្រា', thPrincipal: 'ប្រាក់ដើម',
    thInterest: 'ការប្រាក់', thPayment: 'ការទូទាត់', thEnd: 'សមតុល្យចុងគ្រា',
    typeHints: {
      normal: 'ការប្រាក់ = សមតុល្យប្រាក់ដើមនៅសល់ &times; អត្រាការប្រាក់ក្នុងមួយដំណាក់កាល។ ប្រាក់ដើមត្រូវបានចែកស្មើគ្នា ការទូទាត់ចុងក្រោយអាចខុសគ្នាបន្តិចដើម្បីឱ្យសរុបស្មើនឹងចំនួនកម្ចី។',
      onetime: 'ចំនួនប្រាក់កម្ចីទាំងមូលបូកនឹងការប្រាក់ (ចំនួនកម្ចី &times; អត្រាការប្រាក់) ត្រូវបានសងម្តងទាំងអស់ក្នុងការទូទាត់តែមួយនៅថ្ងៃចាប់ផ្តើម មិនគិតពីរយៈពេល ឬផែនការទូទាត់ឡើយ។',
      halfoff: 'ដូចប្រាក់កម្ចីធម្មតា ប៉ុន្តែគិតយកតែ៥០% នៃការប្រាក់ដែលបានគណនា។',
      zero: 'គ្មានការប្រាក់ត្រូវបានគិតលើការទូទាត់ណាមួយឡើយ។'
    },
    planHint: {
      monthly: 'ការទូទាត់ធ្លាក់ចូលថ្ងៃដូចគ្នារាល់ខែ (ឧទាហរណ៍ ៧/១៧/២០២៦ \u2192 ៨/១៧/២០២៦)។',
      biweekly: 'ការទូទាត់ធ្លាក់ចូលរៀងរាល់១៤ថ្ងៃពីកាលបរិច្ឆេទចាប់ផ្តើម។ រយៈពេលគឺជាចំនួននៃការទូទាត់រៀងរាល់២សប្តាហ៍។'
    },
    rateHint: {
      monthly: 'អនុវត្តម្តងក្នុងមួយការទូទាត់ជាអត្រាប្រចាំខែ ដោយសារផែនការទូទាត់ជាប្រចាំខែ។',
      biweekly: 'អនុវត្តម្តងក្នុងមួយការទូទាត់ជាអត្រារៀងរាល់២សប្តាហ៍ ដោយសារផែនការទូទាត់ជារៀងរាល់២សប្តាហ៍។'
    },
    pdfTitle: 'Loan amortization schedule',
    metaLoanAmount: 'ចំនួនប្រាក់កម្ចី', metaLoanType: 'ប្រភេទប្រាក់កម្ចី', metaDuration: 'រយៈពេល (ដំណាក់កាល)',
    metaRate: 'អត្រាការប្រាក់ក្នុងមួយដំណាក់កាល (%)', metaPlan: 'ផែនការទូទាត់', metaStartDate: 'កាលបរិច្ឆេទចាប់ផ្តើម',
    metaNumPayments: 'ចំនួនការទូទាត់', metaTotalInterest: 'ការប្រាក់សរុប', metaTotalPaid: 'ចំនួនទឹកប្រាក់សរុបបានសង'
  }
};

function refreshDynamicHints(){
  var t = i18n[currentLang];
  var loanType = document.getElementById('loanType').value;
  var plan = document.getElementById('plan').value;
  document.getElementById('typeHint').innerHTML = t.typeHints[loanType];
  document.getElementById('planHint').textContent = t.planHint[plan];
  document.getElementById('rateHint').textContent = t.rateHint[plan];
}

function setLanguage(lang){
  currentLang = lang;
  var t = i18n[lang];
  document.body.classList.toggle('lang-km', lang === 'km');
  document.getElementById('langBtnEn').classList.toggle('active', lang === 'en');
  document.getElementById('langBtnKm').classList.toggle('active', lang === 'km');

  document.getElementById('txtTitle').textContent = t.title;
  document.getElementById('txtSubtitle').textContent = t.subtitle;
  document.getElementById('txtCardParticulars').textContent = t.cardParticulars;
  document.getElementById('lblLoanType').textContent = t.lblLoanType;
  document.getElementById('lblLoanAmount').textContent = t.lblLoanAmount;
  document.getElementById('lblDuration').textContent = t.lblDuration;
  document.getElementById('durationHint').textContent = t.durationHint;
  document.getElementById('lblRate').textContent = t.lblRate;
  document.getElementById('lblPlan').textContent = t.lblPlan;
  document.getElementById('lblStartDate').textContent = t.lblStartDate;
  document.getElementById('optNormal').textContent = t.optNormal;
  document.getElementById('optOnetime').textContent = t.optOnetime;
  document.getElementById('optHalfoff').textContent = t.optHalfoff;
  document.getElementById('optZero').textContent = t.optZero;
  document.getElementById('optMonthly').textContent = t.optMonthly;
  document.getElementById('optBiweekly').textContent = t.optBiweekly;
  document.getElementById('btnGenerate').textContent = t.btnGenerate;
  document.getElementById('txtCardSummary').textContent = t.cardSummary;
  document.getElementById('txtStampLabel').textContent = t.stampLabel;
  document.getElementById('txtStatLoan').textContent = t.statLoan;
  document.getElementById('txtStatCount').textContent = t.statCount;
  document.getElementById('txtStatInterest').textContent = t.statInterest;
  document.getElementById('txtStatTotal').textContent = t.statTotal;
  document.getElementById('btnExportExcel').textContent = t.btnExportExcel;
  document.getElementById('btnExportPDF').textContent = t.btnExportPDF;
  document.getElementById('txtCardSchedule').textContent = t.cardSchedule;

  var pdfNote = document.getElementById('txtPdfNote');
  if(lang === 'km'){
    pdfNote.textContent = t.pdfNote;
    pdfNote.style.display = 'block';
  } else {
    pdfNote.style.display = 'none';
  }

  refreshDynamicHints();

  if(lastResult){
    generateSchedule();
  } else {
    document.getElementById('txtEmptyNote').textContent = t.emptyNote;
  }
}

document.getElementById('loanType').addEventListener('change', refreshDynamicHints);
document.getElementById('plan').addEventListener('change', refreshDynamicHints);

function fmtMoney(n){
  return '$' + n.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2 });
}

function addMonths(date, months){
  var d = new Date(date.getTime());
  var day = d.getDate();
  d.setDate(1);
  d.setMonth(d.getMonth() + months);
  var lastDay = new Date(d.getFullYear(), d.getMonth()+1, 0).getDate();
  d.setDate(Math.min(day, lastDay));
  return d;
}

function addDays(date, days){
  var d = new Date(date.getTime());
  d.setDate(d.getDate() + days);
  return d;
}

function fmtDate(d){
  return (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear();
}

var lastResult = null;

function generateSchedule(){
  var loanAmount = parseFloat(document.getElementById('loanAmount').value) || 0;
  var duration = parseInt(document.getElementById('duration').value) || 0;
  var monthlyRatePct = parseFloat(document.getElementById('rate').value) || 0;
  var monthlyRate = monthlyRatePct / 100;
  var plan = document.getElementById('plan').value;
  var startDateVal = document.getElementById('startDate').value;
  var selectedType = document.getElementById('loanType').value;

  if(loanAmount <= 0 || duration <= 0 || !startDateVal){
    document.getElementById('scheduleContainer').innerHTML = '<div class="empty-note">' + i18n[currentLang].errorFill + '</div>';
    document.getElementById('summaryCard').style.display = 'none';
    return;
  }

  var startDate = new Date(startDateVal + 'T00:00:00');

  var numPayments, periodicRate;
  if(selectedType === 'onetime'){
    numPayments = 1;
  } else {
    numPayments = duration;
  }
  periodicRate = monthlyRate;

  var basePrincipal = Math.round((loanAmount / numPayments) * 100) / 100;
  var oneTimeInterestTotal = Math.round(loanAmount * monthlyRate * 100) / 100;

  var rows = [];
  var remaining = loanAmount;
  var principalSoFar = 0;
  var currentDate = new Date(startDate.getTime());

  for(var i=1; i<=numPayments; i++){
    var beginBalance = remaining;
    var principal;
    if(i === numPayments){
      principal = Math.round((loanAmount - principalSoFar) * 100) / 100;
    } else {
      principal = basePrincipal;
    }
    principalSoFar += principal;

    var interest = 0;
    if(selectedType === 'normal'){
      interest = beginBalance * periodicRate;
    } else if(selectedType === 'halfoff'){
      interest = beginBalance * periodicRate * 0.5;
    } else if(selectedType === 'onetime'){
      interest = (i === 1) ? oneTimeInterestTotal : 0;
    } else if(selectedType === 'zero'){
      interest = 0;
    }
    interest = Math.round(interest * 100) / 100;

    var payment = Math.round((principal + interest) * 100) / 100;
    remaining = Math.round((remaining - principal) * 100) / 100;

    rows.push({
      num: i,
      date: fmtDate(currentDate),
      begin: beginBalance,
      principal: principal,
      interest: interest,
      payment: payment,
      end: remaining
    });

    if(plan === 'monthly'){
      currentDate = addMonths(startDate, i);
    } else {
      currentDate = addDays(startDate, i*14);
    }
  }

  var totalInterest = rows.reduce(function(sum, r){ return sum + r.interest; }, 0);
  var totalPaid = rows.reduce(function(sum, r){ return sum + r.payment; }, 0);

  document.getElementById('summaryCard').style.display = 'block';
  document.getElementById('statLoan').textContent = fmtMoney(loanAmount);
  document.getElementById('statCount').textContent = numPayments;
  document.getElementById('statInterest').textContent = fmtMoney(totalInterest);
  document.getElementById('statTotal').textContent = fmtMoney(totalPaid);
  document.getElementById('stampAmount').textContent = fmtMoney(totalInterest);

  var t = i18n[currentLang];
  var html = '<div class="table-scroll"><table class="schedule"><thead><tr>' +
    '<th>' + t.thNum + '</th><th>' + t.thDate + '</th><th>' + t.thBegin + '</th><th>' + t.thPrincipal + '</th><th>' + t.thInterest + '</th><th>' + t.thPayment + '</th><th>' + t.thEnd + '</th>' +
    '</tr></thead><tbody>';

  rows.forEach(function(r){
    var rowClass = (r.num === numPayments) ? ' class="last-row"' : '';
    html += '<tr' + rowClass + '>' +
      '<td>' + r.num + '</td>' +
      '<td>' + r.date + '</td>' +
      '<td>' + fmtMoney(r.begin) + '</td>' +
      '<td>' + fmtMoney(r.principal) + '</td>' +
      '<td>' + fmtMoney(r.interest) + '</td>' +
      '<td>' + fmtMoney(r.payment) + '</td>' +
      '<td>' + fmtMoney(r.end) + '</td>' +
      '</tr>';
  });

  html += '</tbody></table></div>';
  document.getElementById('scheduleContainer').innerHTML = html;

  lastResult = {
    loanAmount: loanAmount,
    duration: duration,
    typeKey: selectedType,
    ratePct: monthlyRatePct,
    planKey: plan,
    startDateStr: fmtDate(startDate),
    numPayments: numPayments,
    rows: rows,
    totalInterest: totalInterest,
    totalPaid: totalPaid
  };
}

var typeOptionKey = { normal:'optNormal', onetime:'optOnetime', halfoff:'optHalfoff', zero:'optZero' };
var planOptionKey = { monthly:'optMonthly', biweekly:'optBiweekly' };

function buildMetaRows(lang){
  var t = i18n[lang];
  return [
    { label: t.metaLoanAmount, value: lastResult.loanAmount, type: 'currency' },
    { label: t.metaLoanType, value: t[typeOptionKey[lastResult.typeKey]], type: 'text' },
    { label: t.metaDuration, value: lastResult.duration, type: 'count' },
    { label: t.metaRate, value: lastResult.ratePct, type: 'percent' },
    { label: t.metaPlan, value: t[planOptionKey[lastResult.planKey]], type: 'text' },
    { label: t.metaStartDate, value: lastResult.startDateStr, type: 'text' },
    { label: t.metaNumPayments, value: lastResult.numPayments, type: 'count' },
    { label: t.metaTotalInterest, value: lastResult.totalInterest, type: 'currency' },
    { label: t.metaTotalPaid, value: lastResult.totalPaid, type: 'currency' }
  ];
}

function formatMetaValue(item){
  if(item.type === 'currency'){ return fmtMoney(item.value); }
  if(item.type === 'percent'){ return item.value + '%'; }
  return item.value;
}

function exportExcel(){
  if(!lastResult){
    alert(i18n[currentLang].errorGenerateFirst);
    return;
  }
  var t = i18n[currentLang];
  var meta = buildMetaRows(currentLang);
  var aoa = [[t.pdfTitle], []];
  meta.forEach(function(item){
    aoa.push([item.label, formatMetaValue(item)]);
  });
  aoa.push([]);
  aoa.push([t.thNum, t.thDate, t.thBegin, t.thPrincipal, t.thInterest, t.thPayment, t.thEnd]);
  lastResult.rows.forEach(function(r){
    aoa.push([r.num, r.date, r.begin, r.principal, r.interest, r.payment, r.end]);
  });

  var ws = XLSX.utils.aoa_to_sheet(aoa);
  ws['!cols'] = [{wch:8},{wch:14},{wch:18},{wch:14},{wch:12},{wch:14},{wch:18}];
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Schedule');
  XLSX.writeFile(wb, 'loan_amortization_schedule.xlsx');
}

function exportPDF(){
  if(!lastResult){
    alert(i18n[currentLang].errorGenerateFirst);
    return;
  }
  var t = i18n.en;
  var jsPDFCtor = window.jspdf.jsPDF;
  var doc = new jsPDFCtor({ orientation:'landscape', unit:'pt' });

  doc.setFontSize(16);
  doc.text(t.pdfTitle, 40, 40);

  var meta = buildMetaRows('en');
  var metaLines = meta.map(function(item){
    return item.label + ':  ' + formatMetaValue(item);
  });

  doc.setFontSize(10);
  var col1 = metaLines.slice(0, 5);
  var col2 = metaLines.slice(5);
  var y = 62;
  col1.forEach(function(line, i){ doc.text(line, 40, y + i*14); });
  col2.forEach(function(line, i){ doc.text(line, 320, y + i*14); });

  var tableStartY = y + Math.max(col1.length, col2.length) * 14 + 16;

  var body = lastResult.rows.map(function(r){
    return [r.num, r.date, fmtMoney(r.begin), fmtMoney(r.principal), fmtMoney(r.interest), fmtMoney(r.payment), fmtMoney(r.end)];
  });

  doc.autoTable({
    startY: tableStartY,
    head: [[t.thNum, t.thDate, t.thBegin, t.thPrincipal, t.thInterest, t.thPayment, t.thEnd]],
    body: body,
    styles: { fontSize: 8 },
    headStyles: { fillColor: [31, 61, 43] }
  });

  doc.save('loan_amortization_schedule.pdf');
}
