/* ============================================================
   용어 사전 (GLOSSARY)
   영문 인보이스 항목 → 국문 명칭 + 쉬운 설명
   match: 영문 Description 에 포함되면 자동 인식되는 키워드(소문자)
   ※ 순서 중요: 더 구체적인 항목을 위에 둬야 정확히 인식됨
     - participation_fee 를 service_general 보다 위에 두어
       "PARTICIPATION FEE" 가 일반 서비스로 오인식되지 않게 함 (버그 3)
     - service_pvip 의 match 를 'pvip' 로 두되, guessKey 는
       항목 블록 단위로만 1회 판정하므로 항목 간 교차 인식이 없음
   ============================================================ */
const GLOSSARY = [
  {
    key: "service_pvip",
    ko: "U1 서비스 수수료 (PVIP 프리미엄 비자 대행)",
    en: "U1 Service Fee - PVIP",
    desc: "프리미엄 비자(PVIP) 신청 대행 비용입니다. 고액 예치 기반의 프리미엄 거주 비자 프로그램입니다.",
    descEn: "Service fee for handling a PVIP (Premium Visa Programme) application — a premium residency visa based on a high-value deposit.",
    match: ["pvip"]
  },
  {
    key: "participation_fee",
    ko: "참가비 (Participation Fee)",
    en: "Participation Fee",
    desc: "비자 프로그램 참가에 따라 발생하는 비용입니다. 프로그램 종류에 따라 산정 기준이 다릅니다.",
    descEn: "Fee payable for participation in the visa programme. The basis varies by programme type.",
    match: ["participation fee", "participation"]
  },
  {
    key: "visa_cancellation",
    ko: "비자 취소 대행 수수료",
    en: "Visa Cancellation Service Fee",
    desc: "기존 비자(본인 또는 동반가족)의 취소 절차를 U1이 대행하는 비용입니다.",
    descEn: "Service fee for handling the cancellation of an existing visa (principal or dependant).",
    match: ["visa cancellation", "dependent visa cancellation", "dependant visa cancellation"]
  },
  {
    key: "service_mm2h",
    ko: "U1 서비스 수수료 (MM2H 신청 대행)",
    en: "U1 Service Fee - MM2H",
    desc: "MM2H(말레이시아 마이 세컨드 홈) 비자 신청의 전 과정을 U1이 대행하는 서비스 비용입니다. 서류 준비부터 정부 제출·승인까지 포함됩니다.",
    match: ["new mm2h", "refresh mm2h", "mm2h silver", "mm2h gold", "mm2h platinum", "mm2h sez", "mm2h"]
  },
  {
    key: "service_tebp",
    ko: "U1 서비스 수수료 (체류기간 연장 · TEBP)",
    en: "Service Fee for TEBP",
    desc: "TEBP(체류 허가/기간 연장) 처리를 U1이 대행하는 서비스 비용입니다.",
    descEn: "U1's service fee for processing TEBP (extension of stay / pass endorsement).",
    match: ["service fee for tebp", "fee for tebp", "tebp"]
  },
  {
    key: "service_pts",
    ko: "U1 서비스 수수료 (유학 허가 · PTS)",
    en: "Service Fee for Permission to Study (PTS)",
    desc: "PTS(유학·수학 허가) 신청을 U1이 대행하는 서비스 비용입니다.",
    descEn: "U1's service fee for handling a PTS (Permission to Study) application.",
    match: ["permission to study", "pts"]
  },
  {
    key: "fd_withdrawal",
    ko: "정기예금(FD) 인출 대행 수수료",
    en: "Fixed Deposit Withdrawal Service Fee",
    desc: "비자 요건으로 예치했던 정기예금(Fixed Deposit)의 인출 절차를 U1이 대행하는 비용입니다.",
    descEn: "Service fee for handling the withdrawal of the Fixed Deposit placed as a visa requirement.",
    match: ["fixed deposit withdrawal", "fd withdrawal"]
  },
  {
    key: "bank_assist",
    ko: "은행 업무 지원 수수료",
    en: "Bank Assist Service Fee",
    desc: "현지 은행 계좌 개설·거래 등 은행 관련 업무를 U1이 지원하는 비용입니다.",
    descEn: "Service fee for assisting with local bank matters such as account opening and transactions.",
    match: ["bank assist"]
  },
  {
    key: "dependant_processing",
    ko: "동반가족 신청 처리 수수료",
    en: "Dependant Processing Fee",
    desc: "주신청자와 함께 비자를 신청하는 동반가족(배우자·자녀·부모 등) 1인당 발생하는 신청 처리 비용입니다.",
    descEn: "Per-dependant processing fee for family members (spouse, children, parents) applying alongside the principal.",
    match: ["dependant processing", "dependent processing"]
  },
  {
    key: "visa_fee",
    ko: "비자 발급비 (정부 납부)",
    en: "Visa Fee",
    desc: "말레이시아 정부에 납부하는 비자 발급 공식 수수료입니다. 비자 유효기간(연 단위)에 따라 합산되어 청구됩니다.",
    descEn: "Official government visa issuance fee, charged per year of visa validity.",
    match: ["visa fee"]
  },
  {
    key: "insurance_fee",
    ko: "의료보험료",
    en: "Insurance Fee",
    desc: "MM2H 비자 요건으로 가입이 필수인 현지 의료보험의 보험료입니다. 신청인별로 산정됩니다.",
    descEn: "Premium for the local medical insurance required as an MM2H visa condition, calculated per applicant.",
    match: ["insurance fee", "insurance"]
  },
  {
    key: "medical_checkup",
    ko: "건강검진 비용",
    en: "Medical Check Up",
    desc: "비자 신청 요건인 지정 병원 건강검진 비용입니다. 신청인 1인당 발생합니다.",
    descEn: "Cost of the required medical check-up at a designated clinic, per applicant.",
    match: ["medical check", "medical checkup", "medical check up"]
  },
  {
    key: "passport_photo",
    ko: "여권 사진 인쇄",
    en: "Passport Photo Printing",
    desc: "비자 서류용 여권 규격 사진 인쇄 비용입니다.",
    descEn: "Cost of printing passport-size photos for visa documents.",
    match: ["passport photo", "photo printing"]
  },
  {
    key: "security_deposit",
    ko: "보증금 (예치금)",
    en: "Security Deposit",
    desc: "비자 처리를 위해 예치하는 보증금입니다. 조건에 따라 추후 환급될 수 있습니다.",
    descEn: "Deposit placed to process the visa. May be refundable under certain conditions.",
    match: ["security deposit", "deposit"]
  },
  {
    key: "stamp_duty",
    ko: "인지세 (정부 납부)",
    en: "Stamp Duty",
    desc: "관련 서류·계약에 부과되는 말레이시아 정부 인지세입니다.",
    descEn: "Malaysian government stamp duty levied on related documents or agreements.",
    match: ["stamp duty", "stamp"]
  },
  {
    key: "endorsement",
    ko: "비자 부착(엔도스먼트) 수수료",
    en: "Visa Endorsement Fee",
    desc: "여권에 비자를 부착·등록하는 절차에 발생하는 수수료입니다.",
    descEn: "Fee for endorsing/affixing the visa into the passport.",
    match: ["endorsement", "endorse"]
  },
  {
    key: "service_general",
    ko: "U1 서비스 수수료 (일반)",
    en: "U1 Service Fee (General)",
    desc: "U1이 제공하는 서비스에 대한 수수료입니다. 세부 업무 내용은 영문 인보이스 항목명을 참고해 주세요.",
    descEn: "Fee for a service provided by U1. Please refer to the English invoice line for the specific work performed.",
    match: ["u1 service fee", "service fee", "u1 service"]
  },
  {
    key: "other",
    ko: "기타 (직접 입력)",
    en: "Other",
    desc: "",
    descEn: "",
    match: []
  }
];

/* U1 MM2H 서비스 수수료 세부 구분 라벨 (service_mm2h 전용) */
const WORK_LABELS = { NEW: "신규 신청", REFRESH: "갱신" };
const WORK_LABELS_EN = { NEW: "New", REFRESH: "Renewal" };
const TIER_LABELS = { PLATINUM: "플래티넘", GOLD: "골드", SILVER: "실버", SEZ: "SEZ" };
const TIER_LABELS_EN = { PLATINUM: "Platinum", GOLD: "Gold", SILVER: "Silver", SEZ: "SEZ" };

/* 이름(who) 으로 오인식되면 안 되는 항목성 키워드 (버그 2 정제) */
const NOT_A_NAME = /^(tebp|pts|permission to study|mm2h|pvip|visa|fixed deposit|bank|service|new|refresh)\b/i;

/* ============================================================
   언어 사전 (i18n) — UI 텍스트
   ============================================================ */
let LANG = 'ko';
const I18N = {
  ko: {
    appTitle: "인보이스 안내문 생성기",
    panelInput: "인보이스 정보 입력",
    panelInputHint: "영문 인보이스 보고 그대로 입력",
    dzTitle: "여기에 인보이스를 업로드하여 자동 입력",
    dzSub: "영문 인보이스 PDF를 끌어다 놓거나 클릭하여 선택하세요",
    infoStrip: '항목을 선택하면 <b>국문 설명이 자동</b>으로 붙습니다. 목록에 없는 특수 항목은 <b>"기타 (직접 입력)"</b>을 골라 설명을 직접 작성하세요.',
    secBasic: "기본 정보",
    lblInvNo: "인보이스 번호",
    lblBillTo: "고객명 (Bill To)",
    phBillTo: "고객 영문 이름",
    lblDate: "발행일",
    lblDue: "납부 기한 (Due Date)",
    secItems: "청구 항목",
    btnAddItem: "＋ 항목 추가",
    secTax: "세금 (선택)",
    lblSST: "서비스세 SST (없으면 0 또는 비움)",
    phSST: "예: 132.00  (없으면 비워두세요)",
    secPay: "입금 정보",
    lblBank: "은행", lblAcctName: "예금주", lblAcctMYR: "계좌번호 (MYR)",
    lblAcctUSD: "계좌번호 (USD)", lblSwift: "SWIFT 코드",
    btnReset: "초기화", btnPrint: "📄 PDF로 저장 / 인쇄",
    panelPreview: "안내문 미리보기", panelPreviewHint: "입력하면 실시간 반영",
    panelOriginal: "원본 인보이스 보기", panelOriginalHint: "업로드한 원본과 대조",
    origEmpty: "PDF를 업로드하면 여기에 원본 인보이스가 표시됩니다.",
    selectPrompt: "― 항목을 선택하세요 ―",
    phItemEn: "영문 항목명 (예: VISA FEE FOR ...)",
    phWho: "대상자 (예: HONG GIL DONG)",
    phAmt: "금액 (예: 2,650.00)",
    phCustom: "이 항목의 국문 설명을 직접 입력하세요",
    workLbl: "업무 구분", tierLbl: "등급 (Tier)",
    workPick: "구분 선택", tierPick: "등급 선택",
    itemUnknown: "⚠ 인식되지 않은 항목입니다. 위 목록에서 알맞은 항목을 선택해 주세요.",
    docTitle: "청구 안내서", docSub: "INVOICE GUIDE (KR)",
    mInvNo: "인보이스 번호", mBillTo: "고객명", mDate: "발행일", mDue: "납부 기한",
    greet: (name) => `<b>${name}</b> 님, 안녕하십니까. U1 International을 이용해 주셔서 감사합니다.<br>본 안내서는 함께 보내드린 <b>영문 인보이스(공식 청구서)</b>의 내용을 한국어로 풀어 설명드리기 위한 참고 자료입니다. 실제 납부 및 회계 처리는 <b>영문 인보이스를 기준</b>으로 진행됩니다.`,
    secItemGuide: "청구 항목 안내",
    thItem: "항목 및 설명", thAmt: "금액",
    lblTarget: "대상", lblCalc: "산정", lblSource: "원문",
    subtotal: "소계 (Subtotal)", serviceTax: "서비스세 (Service Tax 8%)", totalLbl: "합계 (TOTAL)",
    payTitle: "💳 입금 안내",
    pBank: "은행", pAcctName: "예금주", pMYR: "계좌 (MYR)", pUSD: "계좌 (USD)", pSwift: "SWIFT",
    foot1: "본 안내서는 고객 편의를 위한 <b>국문 참고 자료</b>이며, 법적·회계상 효력을 갖는 공식 청구서는 함께 송부된 영문 인보이스입니다.",
    foot2: "항목·금액에 대한 문의는 담당자에게 연락 주시면 안내해 드리겠습니다.",
    footDisc: "이 문서는 자동 생성되었습니다. · This is a Korean-language guide accompanying the official English invoice.",
    emptyHint: "항목을 입력하면<br>안내문이 여기 표시됩니다.",
    custName: "고객"
  },
  en: {
    appTitle: "Invoice Guide Generator",
    panelInput: "Enter Invoice Details",
    panelInputHint: "Copy directly from the English invoice",
    dzTitle: "Upload an invoice here to auto-fill",
    dzSub: "Drag & drop the English invoice PDF, or click to select",
    infoStrip: 'Selecting an item attaches its <b>explanation automatically</b>. For items not in the list, choose <b>"Other (custom)"</b> and write the description yourself.',
    secBasic: "Basic Information",
    lblInvNo: "Invoice No.",
    lblBillTo: "Customer (Bill To)",
    phBillTo: "Customer name",
    lblDate: "Issue Date",
    lblDue: "Due Date",
    secItems: "Line Items",
    btnAddItem: "＋ Add Item",
    secTax: "Tax (optional)",
    lblSST: "Service Tax / SST (leave blank if none)",
    phSST: "e.g. 132.00  (leave blank if none)",
    secPay: "Payment Details",
    lblBank: "Bank", lblAcctName: "Account Name", lblAcctMYR: "Account No. (MYR)",
    lblAcctUSD: "Account No. (USD)", lblSwift: "SWIFT Code",
    btnReset: "Reset", btnPrint: "📄 Save as PDF / Print",
    panelPreview: "Guide Preview", panelPreviewHint: "Updates as you type",
    panelOriginal: "Original Invoice", panelOriginalHint: "Compare with the upload",
    origEmpty: "Upload a PDF to view the original invoice here.",
    selectPrompt: "― Select an item ―",
    phItemEn: "Invoice line text (e.g. VISA FEE FOR ...)",
    phWho: "Person (e.g. HONG GIL DONG)",
    phAmt: "Amount (e.g. 2,650.00)",
    phCustom: "Write the description for this item",
    workLbl: "Type", tierLbl: "Tier",
    workPick: "Select type", tierPick: "Select tier",
    itemUnknown: "⚠ This item was not recognized. Please pick the right item above.",
    docTitle: "Invoice Guide", docSub: "INVOICE GUIDE (EN)",
    mInvNo: "Invoice No.", mBillTo: "Customer", mDate: "Issue Date", mDue: "Due Date",
    greet: (name) => `Dear <b>${name}</b>, thank you for choosing U1 International.<br>This guide is a reference that explains, in plain language, the contents of the <b>English invoice (the official bill)</b> sent alongside it. Actual payment and accounting are processed <b>based on the English invoice</b>.`,
    secItemGuide: "Line Item Guide",
    thItem: "Item & Description", thAmt: "Amount",
    lblTarget: "For", lblCalc: "Basis", lblSource: "Source",
    subtotal: "Subtotal", serviceTax: "Service Tax (8%)", totalLbl: "TOTAL",
    payTitle: "💳 Payment Information",
    pBank: "Bank", pAcctName: "Account Name", pMYR: "Acct (MYR)", pUSD: "Acct (USD)", pSwift: "SWIFT",
    foot1: "This guide is a <b>reference document</b> for the customer's convenience. The official bill with legal and accounting effect is the English invoice sent alongside it.",
    foot2: "For questions about items or amounts, please contact your representative.",
    footDisc: "This document was generated automatically.",
    emptyHint: "Enter items and<br>the guide will appear here.",
    custName: "Customer"
  }
};
function t(key){ return I18N[LANG][key]; }

/* 출력 문서(미리보기·PDF)는 UI 언어와 무관하게 항상 국문. */
const DOC_KO = {
  docTitle: "청구 안내서", docSub: "INVOICE GUIDE (KR)",
  mInvNo: "인보이스 번호", mBillTo: "고객명", mDate: "발행일", mDue: "납부 기한",
  greet: (name) => `<b>${name}</b> 님, 안녕하십니까. U1 International을 이용해 주셔서 감사합니다.<br>본 안내서는 함께 보내드린 <b>영문 인보이스(공식 청구서)</b>의 내용을 한국어로 풀어 설명드리기 위한 참고 자료입니다. 실제 납부 및 회계 처리는 <b>영문 인보이스를 기준</b>으로 진행됩니다.`,
  secItemGuide: "청구 항목 안내",
  thItem: "항목 및 설명", thAmt: "금액",
  lblTarget: "대상", lblCalc: "산정", lblSource: "원문",
  subtotal: "소계 (Subtotal)", serviceTax: "서비스세 (Service Tax 8%)", totalLbl: "합계 (TOTAL)",
  payTitle: "💳 입금 안내",
  pBank: "은행", pAcctName: "예금주", pMYR: "계좌 (MYR)", pUSD: "계좌 (USD)", pSwift: "SWIFT",
  foot1: "본 안내서는 고객 편의를 위한 <b>국문 참고 자료</b>이며, 법적·회계상 효력을 갖는 공식 청구서는 함께 송부된 영문 인보이스입니다.",
  foot2: "항목·금액에 대한 문의는 담당자에게 연락 주시면 안내해 드리겠습니다.",
  footDisc: "이 문서는 자동 생성되었습니다. · This is a Korean-language guide accompanying the official English invoice.",
  unknownName: "⚠ 확인불가 항목",
  unknownDesc: "이 항목은 자동으로 확인되지 않았습니다. 담당 직원이 항목을 직접 확인·기재해야 합니다.",
  emptyHint: "항목을 입력하면<br>국문 안내문이 여기 표시됩니다."
};
function d(key){ return DOC_KO[key]; }

function setLang(lang){
  LANG = lang;
  document.documentElement.lang = lang;
  document.getElementById('langKO').classList.toggle('active', lang==='ko');
  document.getElementById('langEN').classList.toggle('active', lang==='en');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if(I18N[lang][k] !== undefined) el.textContent = I18N[lang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if(I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
  });
  document.querySelectorAll('[data-ph]').forEach(el => {
    const k = el.getAttribute('data-ph');
    if(I18N[lang][k] !== undefined) el.placeholder = I18N[lang][k];
  });
  renderItems();
}

/* 영문 Description 으로 사전 항목 자동 추정 (항목 블록 단위로 1회만 호출) */
function guessKey(text){
  const s = (text||"").toLowerCase();
  for(const g of GLOSSARY){
    if(g.key === "other") continue;
    if(g.match.some(m => s.includes(m))) return g.key;
  }
  return null;
}

let items = [];
let uploadedFileName = '';
let uploadedPdfUrl = '';

function optionsHTML(selectedKey){
  return GLOSSARY.map(g => {
    const name = LANG==='en' ? (g.en || g.ko) : g.ko;
    return `<option value="${g.key}" ${g.key===selectedKey?'selected':''}>${name}</option>`;
  }).join('');
}

function renderItems(){
  const box = document.getElementById('items');
  box.innerHTML = items.map((it, i) => {
    const isOther = it.key === 'other';
    const isBlank = it.key === null && !it.en && !it.who && !it.amt;
    const isUnknown = it.key === null && !isBlank;
    const needPick = it.key === null;
    const isService = it.key === 'service_mm2h';
    const WL = LANG==='en' ? WORK_LABELS_EN : WORK_LABELS;
    const TL = LANG==='en' ? TIER_LABELS_EN : TIER_LABELS;
    const workOpts = Object.keys(WL).map(k =>
      `<option value="${k}" ${it.work===k?'selected':''}>${WL[k]} (${k})</option>`).join('');
    const tierOpts = Object.keys(TL).map(k =>
      `<option value="${k}" ${it.tier===k?'selected':''}>${TL[k]} (${k})</option>`).join('');
    return `
    <div class="item ${isUnknown?'unknown':''}">
      <div class="item-top">
        <select onchange="setKey(${i}, this.value)">
          ${needPick ? `<option value="" selected disabled>${t('selectPrompt')}</option>` : ''}
          ${optionsHTML(it.key)}
        </select>
        <button class="del-btn" onclick="delItem(${i})" title="×">×</button>
      </div>
      ${isService ? `
      <div class="svc-grid">
        <div class="svc-field">
          <span class="svc-lbl">${t('workLbl')}</span>
          <select onchange="setField(${i},'work',this.value)">
            <option value="" ${!it.work?'selected':''} disabled>${t('workPick')}</option>
            ${workOpts}
          </select>
        </div>
        <div class="svc-field">
          <span class="svc-lbl">${t('tierLbl')}</span>
          <select onchange="setField(${i},'tier',this.value)">
            <option value="" ${!it.tier?'selected':''} disabled>${t('tierPick')}</option>
            ${tierOpts}
          </select>
        </div>
      </div>` : ''}
      <div class="item-grid">
        <input placeholder="${t('phItemEn')}" value="${esc(it.en)}" onchange="setField(${i},'en',this.value)">
        <input placeholder="${t('phWho')}" value="${esc(it.who)}" onchange="setField(${i},'who',this.value)">
        <input placeholder="${t('phAmt')}" value="${esc(it.amt)}" onchange="setField(${i},'amt',this.value)">
      </div>
      ${isOther ? `<input style="margin-top:8px;font-size:12.5px;padding:7px 9px;width:100%;" placeholder="${t('phCustom')}" value="${esc(it.customDesc||'')}" onchange="setField(${i},'customDesc',this.value)">` : ''}
      <div class="item-note">${t('itemUnknown')}</div>
    </div>`;
  }).join('');
  renderDoc();
}

function esc(s){ return (s||'').replace(/"/g,'&quot;').replace(/</g,'&lt;'); }

function setKey(i, val){ items[i].key = val; renderItems(); }
function setField(i, f, val){
  items[i][f] = val;
  if(f === 'en'){
    const g = guessKey(val);
    if(g && items[i].key === null) items[i].key = g;
  }
  renderItems();
}
function addItem(){ items.push({ key:null, en:'', who:'', amt:'', note:'' }); renderItems(); }
function delItem(i){ items.splice(i,1); renderItems(); }

function resetAll(){
  if(!confirm('모든 입력을 초기화할까요?')) return;
  items = [{ key:null, en:'', who:'', amt:'', note:'' }];
  ['invNo','billTo','invDate','dueDate','sstAmt'].forEach(id => document.getElementById(id).value = '');
  const st = document.getElementById('dzStatus');
  if(st) st.className = 'dz-status';
  const pi = document.getElementById('pdfInput');
  if(pi) pi.value = '';
  uploadedFileName = '';
  if(uploadedPdfUrl){ URL.revokeObjectURL(uploadedPdfUrl); uploadedPdfUrl = ''; }
  const ov = document.getElementById('originalView');
  if(ov) ov.innerHTML = `<div class="orig-empty" data-i18n="origEmpty">${t('origEmpty')}</div>`;
  renderItems();
}

function parseAmt(s){ return parseFloat((s||'0').replace(/,/g,'')) || 0; }
function fmt(n){ return n.toLocaleString('en-US',{minimumFractionDigits:2, maximumFractionDigits:2}); }

/* ============================================================
   PDF 저장/인쇄 (버그 1)
   - 인쇄 격리는 styles.css @media print 에서 처리.
   - 여기서는 저장 파일명만 지정하고 window.print() 호출.
   ============================================================ */
function doPrint(){
  const origTitle = document.title;
  const invVal = document.getElementById('invNo').value;
  const base = uploadedFileName
    ? `${uploadedFileName} (국문 Invoice)`
    : (invVal ? `${invVal} (국문 Invoice)` : '국문 Invoice');
  document.title = base;
  const restore = () => { document.title = origTitle; window.removeEventListener('afterprint', restore); };
  window.addEventListener('afterprint', restore);
  window.print();
  setTimeout(restore, 1500);
}

function renderDoc(){
  const get = id => { const el = document.getElementById(id); return el ? el.value : ''; };
  const shown = items.filter(it => (it.key && it.key!=='') || it.en || it.who || it.amt);
  const subtotal = items.reduce((s,it)=> s + parseAmt(it.amt), 0);
  const sst = parseAmt(get('sstAmt'));
  const total = subtotal + sst;
  let hasUnknown = false;

  const rows = shown.map((it,idx) => {
    const recognized = it.key && it.key !== '';
    if(!recognized){
      hasUnknown = true;
      return `
      <tr class="row-unknown">
        <td style="width:24px;color:var(--warn)">${idx+1}</td>
        <td>
          <div class="item-name" style="color:var(--warn)">${d('unknownName')}</div>
          ${it.who ? `<div class="item-desc">· ${d('lblTarget')}: ${esc(it.who)}</div>`:''}
          <div class="item-desc" style="color:var(--warn)">${d('unknownDesc')}</div>
          <div class="item-en">${d('lblSource')}: ${esc(it.en||'(미입력)')}</div>
        </td>
        <td class="r" style="white-space:nowrap;font-weight:600">${it.amt? 'RM '+fmt(parseAmt(it.amt)) : '-'}</td>
      </tr>`;
    }
    const g = GLOSSARY.find(x=>x.key===it.key) || {};
    let name = g.ko || '';
    let desc = it.key==='other' ? (it.customDesc||'') : (g.desc||'');
    if(it.key === 'service_mm2h'){
      const work = WORK_LABELS[it.work] || '';
      const tierEn = it.tier || '';
      const parts = ['MM2H', tierEn, work, '대행'].filter(Boolean).join(' ');
      name = `U1 서비스 수수료 (${parts})`;
    }
    return `
    <tr>
      <td style="width:24px;color:var(--ink-faint)">${idx+1}</td>
      <td>
        <div class="item-name">${esc(name)}</div>
        ${it.who ? `<div class="item-desc">· ${d('lblTarget')}: ${esc(it.who)}</div>`:''}
        ${it.note ? `<div class="item-desc">· ${d('lblCalc')}: ${esc(it.note)}</div>`:''}
        <div class="item-desc">${esc(desc)}</div>
        <div class="item-en">${d('lblSource')}: ${esc(it.en||g.en||'')}</div>
      </td>
      <td class="r" style="white-space:nowrap;font-weight:600">RM ${fmt(parseAmt(it.amt))}</td>
    </tr>`;
  }).join('');

  const doc = document.getElementById('doc');

  if(shown.length === 0){
    doc.innerHTML = `<div class="empty-hint"><div class="ic">📋</div>${d('emptyHint')}</div>`;
    return;
  }

  const warnBanner = hasUnknown ? `
    <div class="doc-warn">
      ⚠ <b>확인불가 항목이 포함되어 있습니다.</b> 발송 전 담당 직원이 해당 항목을 영문 인보이스와 대조하여 직접 확인·수정해 주세요.
    </div>` : '';

  doc.innerHTML = `
    <div class="doc-head">
      <div class="co">
        <div class="co-mark">U1</div>
        <div>
          <h3>U1 INTERNATIONAL (MM2H) SDN. BHD.</h3>
          <p>C-L07-01, Level 7, KL Trillion, No.338 Jalan Tun Razak, 50400 Kuala Lumpur</p>
          <p>Tel +60 3-2725 9210 · u1hrdept@gmail.com · www.u1int.com</p>
        </div>
      </div>
      <div class="doc-title">
        <div class="big">${d('docTitle')}</div>
        <div class="sub">${d('docSub')}</div>
      </div>
    </div>

    ${warnBanner}

    <div class="doc-meta">
      <div><span class="k">${d('mInvNo')}</span><span class="v">${esc(get('invNo'))||'-'}</span></div>
      <div><span class="k">${d('mBillTo')}</span><span class="v">${esc(get('billTo'))||'-'}</span></div>
      <div><span class="k">${d('mDate')}</span><span class="v">${esc(get('invDate'))||'-'}</span></div>
      <div><span class="k">${d('mDue')}</span><span class="v">${esc(get('dueDate'))||'-'}</span></div>
    </div>

    <p class="greet">${d('greet')(esc(get('billTo'))||'고객')}</p>

    <div class="doc-section-title">${d('secItemGuide')}</div>
    <table class="doc-table">
      <thead><tr><th></th><th>${d('thItem')}</th><th class="r">${d('thAmt')}</th></tr></thead>
      <tbody>${rows}</tbody>
    </table>

    <div class="total-block">
      <div class="total-line"><span>${d('subtotal')}</span><span>RM ${fmt(subtotal)}</span></div>
      ${sst>0 ? `<div class="total-line"><span>${d('serviceTax')}</span><span>RM ${fmt(sst)}</span></div>` : ''}
      <div class="total-row">
        <span class="lbl">${d('totalLbl')}</span>
        <span class="amt">RM ${fmt(total)}</span>
      </div>
    </div>

    <div class="pay-box">
      <div class="pt">${d('payTitle')}</div>
      <div class="pay-grid">
        <span class="pk">${d('pBank')}</span><span class="pv">${esc(get('bankName'))}</span>
        <span class="pk">${d('pAcctName')}</span><span class="pv">${esc(get('acctName'))}</span>
        <span class="pk">${d('pMYR')}</span><span class="pv">${esc(get('acctMYR'))}</span>
        <span class="pk">${d('pUSD')}</span><span class="pv">${esc(get('acctUSD'))}</span>
        <span class="pk">${d('pSwift')}</span><span class="pv">${esc(get('swift'))}</span>
      </div>
    </div>

    <div class="doc-foot">
      · ${d('foot1')}<br>
      · ${d('foot2')}<br>
      <div class="disc">${d('footDisc')}</div>
    </div>
  `;
}

/* ============================================================
   PDF 자동 읽기
   ============================================================ */
if(window['pdfjsLib']){
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

function setStatus(type, html){
  const el = document.getElementById('dzStatus');
  el.className = 'dz-status show ' + type;
  el.innerHTML = html;
}

// 드래그앤드롭
const dz = document.getElementById('dropzone');
['dragenter','dragover'].forEach(e =>
  dz.addEventListener(e, ev => { ev.preventDefault(); dz.classList.add('dragover'); }));
['dragleave','drop'].forEach(e =>
  dz.addEventListener(e, ev => { ev.preventDefault(); dz.classList.remove('dragover'); }));
dz.addEventListener('drop', ev => {
  const f = ev.dataTransfer.files[0];
  if(f) handleFile(f);
});

async function handleFile(file){
  if(!file) return;
  if(file.type !== 'application/pdf'){
    setStatus('error', '⚠ PDF 파일만 업로드할 수 있습니다.');
    return;
  }
  if(!window['pdfjsLib']){
    setStatus('error', '⚠ PDF 읽기 모듈을 불러오지 못했습니다. 인터넷 연결을 확인하거나 항목을 직접 입력해 주세요.');
    return;
  }
  setStatus('loading', '<span class="dz-spin"></span><b>'+file.name+'</b> 읽는 중...');

  uploadedFileName = file.name.replace(/\.pdf$/i, '');
  if(uploadedPdfUrl) URL.revokeObjectURL(uploadedPdfUrl);
  uploadedPdfUrl = URL.createObjectURL(file);
  showOriginalPdf(uploadedPdfUrl, file.name);

  try {
    const buf = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({data: buf}).promise;
    let lines = [];
    for(let p=1; p<=pdf.numPages; p++){
      const page = await pdf.getPage(p);
      const tc = await page.getTextContent();
      lines = lines.concat(groupLines(tc.items));
    }
    const result = parseInvoice(lines);
    applyParsed(result);
    const n = result.items.length;
    const unk = result.items.filter(it=>it.key===null).length;
    let msg = `✅ 자동 입력 완료 — 항목 <b>${n}건</b> 인식`;
    if(unk>0) msg += `, 그중 <b>${unk}건</b>은 항목 선택이 필요합니다 (노란색 표시).`;
    msg += `<br><span style="font-size:11px;color:var(--ink-faint)">※ 모든 숫자·항목을 영문 원본과 한 번 대조해 주세요.</span>`;
    setStatus('success', msg);
  } catch(err){
    console.error(err);
    setStatus('error', '⚠ PDF를 읽지 못했습니다. 스캔본(이미지)이거나 형식이 다를 수 있습니다. 항목을 직접 입력해 주세요.');
  }
}

function showOriginalPdf(url, fname){
  const box = document.getElementById('originalView');
  if(!box) return;
  box.innerHTML = `
    <div class="orig-filename">📄 ${fname}</div>
    <embed src="${url}#toolbar=1&navpanes=0" type="application/pdf" class="orig-embed" />
    <div class="orig-fallback">
      PDF가 보이지 않으면 <a href="${url}" target="_blank" rel="noopener">여기를 클릭</a>해 새 창에서 여세요.
    </div>`;
}

/* PDF 텍스트 조각을 Y좌표 기준으로 줄 단위로 묶기 */
function groupLines(items){
  const rows = {};
  items.forEach(it => {
    if(!it.str || !it.str.trim()) return;
    const y = Math.round(it.transform[5]);
    let key = Object.keys(rows).find(k => Math.abs(k - y) <= 3);
    if(key === undefined) key = y;
    (rows[key] = rows[key] || []).push({ x: it.transform[4], s: it.str });
  });
  return Object.keys(rows)
    .sort((a,b)=> b-a)
    .map(k => rows[k].sort((a,b)=>a.x-b.x).map(o=>o.s).join(' ').replace(/\s+/g,' ').trim());
}

/* ============================================================
   인보이스 파싱 (버그 2·3 전면 수정)
   - 메타/은행 정보: 기존 방식 유지
   - 청구 항목: "No. Description ... Amt" 헤더 ~ "Subtotal" 구간만
     항목 영역으로 한정하고, 그 안에서만 블록을 만든다.
     → 회사 주소·연락처 줄이 원문(en)에 섞이는 문제 제거 (버그 2)
   - 각 항목은 '번호로 시작'에서 시작해 'Qty U/Price Amt Disc Tax'
     숫자 줄에서 종료. 블록 단위로 guessKey 1회 → 교차 인식 제거 (버그 3)
   ============================================================ */

// 항목 숫자 꼬리: "1 16,000.00 16,000.00 0.00 1,280.00"
const NUMTAIL = /(\d+)\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})\s+([\d,]+\.\d{2})\s*$/;

function parseInvoice(lines){
  const out = { meta:{}, items:[], bank:{} };
  const joined = lines.join('\n');

  // ── 메타 정보 ──
  const mNo   = joined.match(/IV[-\s]?\d{3,}/i);
  const mDate = joined.match(/Date\s*[:\-]?\s*(\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4})/i)
             || joined.match(/(\d{1,2}\/\d{1,2}\/\d{4})/);
  const mDue  = joined.match(/Due\s*Date\s*[:\-]?\s*(\d{1,2}[\/\-.]\d{1,2}[\/\-.]\d{2,4})/i);
  if(mNo)   out.meta.invNo  = mNo[0].toUpperCase().replace(/\s/g,'');
  if(mDate) out.meta.date   = mDate[1] || mDate[0];
  if(mDue)  out.meta.due    = mDue[1];

  // ── Bill To ──
  const biIdx = lines.findIndex(l => /^bill\s*to/i.test(l));
  if(biIdx >= 0){
    let cand = lines[biIdx].replace(/.*bill\s*to\s*/i,'').trim();
    if(!cand && lines[biIdx+1]) cand = lines[biIdx+1].trim();
    if(cand) out.meta.billTo = cand;
  }

  // ── 은행 정보 ──
  const mBank = joined.match(/Bank\s*[:\-]?\s*([A-Z][A-Z\s&]+(?:BERHAD|BHD|BANK)?)/i);
  const mMYR  = joined.match(/MYR\s*[)\s:]*([\d\s]{8,})/i);
  const mUSD  = joined.match(/USD\s*[)\s:]*([\d\s]{8,})/i);
  const mSwift= joined.match(/Swift\s*code\s*[:\-]?\s*([A-Z0-9]{6,11})/i);
  if(mBank)  out.bank.name = mBank[1].trim();
  if(mMYR)   out.bank.myr  = mMYR[1].trim();
  if(mUSD)   out.bank.usd  = mUSD[1].trim();
  if(mSwift) out.bank.swift= mSwift[1].trim();

  // ── 서비스세(SST) ──
  const mSST = joined.match(/Service\s*Tax[^\n]*?(\d{1,3}(?:,\d{3})*\.\d{2})/i);
  if(mSST) out.meta.sst = mSST[1];

  // ── 청구 항목 영역 한정 ──
  let start = -1, end = lines.length;
  for(let i=0;i<lines.length;i++){
    if(/No\.?\s*Description.*Amt/i.test(lines[i])){ start = i+1; break; }
  }
  if(start >= 0){
    for(let i=start;i<lines.length;i++){
      if(/^Subtotal\b/i.test(lines[i]) || /^Total\b/i.test(lines[i])){ end = i; break; }
    }
    const seg = lines.slice(start, end);

    // 항목 블록 만들기: '번호로 시작' → 'NUMTAIL'에서 종료
    const blocks = [];
    let cur = null;
    for(const line of seg){
      const startsNum = /^\d+\s+\D/.test(line);
      if(startsNum && !cur) cur = [line];
      else if(cur) cur.push(line);
      else continue;
      if(NUMTAIL.test(line)){ blocks.push(cur); cur = null; }
    }

    blocks.forEach(blockLines => {
      const numLine = blockLines[blockLines.length - 1];
      const m = numLine.match(NUMTAIL);
      const amt = m ? m[3] : '';  // 3번째 숫자 = Amt(소계 전 금액)

      // 원문(en): 끝 숫자 꼬리·앞 번호 제거 (버그 2)
      let en = blockLines.join(' ')
        .replace(NUMTAIL,'')
        .replace(/^\d+\s+/, '')
        .replace(/\s+/g,' ')
        .trim();
      if(!en) return;

      // 블록 단위 1회 판정 (버그 3)
      const key = guessKey(en);
      const who = extractName(en);

      const item = { key: key || null, en, who, amt, note:'' };

      if(key === 'service_mm2h'){
        const up = en.toUpperCase();
        if(/\bREFRESH\b|\bRENEW/.test(up)) item.work = 'REFRESH';
        else if(/\bNEW\b/.test(up)) item.work = 'NEW';
        if(/\bPLATINUM\b/.test(up)) item.tier = 'PLATINUM';
        else if(/\bGOLD\b/.test(up)) item.tier = 'GOLD';
        else if(/\bSILVER\b/.test(up)) item.tier = 'SILVER';
        else if(/\bSEZ\b/.test(up)) item.tier = 'SEZ';
      }
      out.items.push(item);
    });
  }

  return out;
}

/* "FOR XXX" 뒤 사람 이름 추출. 단, 항목성 키워드면 이름 아님 (버그 2 정제) */
function extractName(text){
  const m = text.match(/\bFOR\s+([A-Za-z][A-Za-z.\s]{2,40}?)(?=\s*[:(]|\s*\(|\s*$)/i);
  if(!m) return '';
  let cand = m[1].trim().replace(/\s+/g,' ');
  if(NOT_A_NAME.test(cand)) return '';
  // "Principal name:" 등 라벨이 섞인 경우 잘라내기
  cand = cand.replace(/\b(principal name|dependent|dependant)\b.*$/i,'').trim();
  return cand;
}

function applyParsed(r){
  const set = (id,v)=>{ if(v) document.getElementById(id).value = v; };
  set('invNo', r.meta.invNo);
  set('billTo', r.meta.billTo);
  set('invDate', r.meta.date);
  set('dueDate', r.meta.due);
  set('sstAmt', r.meta.sst);
  if(r.bank.name)  set('bankName', r.bank.name);
  if(r.bank.myr)   set('acctMYR', r.bank.myr);
  if(r.bank.usd)   set('acctUSD', r.bank.usd);
  if(r.bank.swift) set('swift', r.bank.swift);
  if(r.items.length){
    items = r.items.map(it => ({...it}));
    renderItems();
  } else {
    renderDoc();
  }
}

// ── init ──
items = [{ key:null, en:'', who:'', amt:'', note:'' }];
['invNo','billTo','invDate','dueDate','sstAmt','bankName','acctName','acctMYR','acctUSD','swift']
  .forEach(id => document.getElementById(id).addEventListener('input', renderDoc));
setLang('ko');
