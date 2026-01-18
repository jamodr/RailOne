const myBookingsBtn = document.getElementById("myBookingsBtn");
const appContent = document.getElementById("appContent");

myBookingsBtn.onclick = () => {
  appContent.innerHTML = `
  <div style="background:#0a57ff;color:white;padding:15px;display:flex;justify-content:space-between">
    <span id="backBtn" style="cursor:pointer">←</span>
    <h3>My Bookings</h3>
    <span>⬇️</span>
  </div>

  <div style="padding:15px">
    <p style="color:#f59e0b;text-align:center;font-size:15px">Upcoming (1)</p>

    <div id="ticketCard" style="border:1px solid #f4b97a;border-radius:20px;padding:15px;margin-top:15px">
      <span style="background:#ead7ff;padding:3px 6px;border-radius:8px;font-size:12px;color:purple">Unreserved</span>
      <span style="float:right;font-weight:300;font-size:12px">UTS: X52CE9100E</span>

      <div style="display:flex;justify-content:space-between;align-items:flex-start">
        <div>
          <p style="color:grey;font-size:12px;margin-top:0.6rem">Ticket Type</p>
          <p style="font-size:0.7rem;margin-top:0.2rem">MONTHLY</p>
        </div>
        <div style="text-align:right">
          <p style="font-size:12px;margin:0;color:grey">Booking Date</p>
          <p style="font-size:12px;margin:0">Mon, 12 Jan 26</p>
        </div>
      </div>

      <div style="display:flex;justify-content:space-between;margin:10px 0;font-size:12px;color:#444">
        <span>VIRAMGAM JN.</span>
        <span style="font-size:11px">— 66 km —</span>
        <span>AHMEDABAD JN.</span>
      </div>

      <hr style="border:none;border-top:1.5px dotted #f59e0b;margin:8px 0">

      <div style="display:flex;justify-content:space-around;margin-top:0.5rem">
        <span id="bookAgainBtn">Book Again</span>
        <span style="color:grey;opacity:0.4">|</span>
        <span id="viewDetailsBtn" style="color:#0a57ff;font-weight:600">View Details</span>
      </div>
    </div>
  </div>
  `;

  document.getElementById("backBtn").onclick = () => location.reload();
  document.getElementById("ticketCard").onclick = openTicketScreen;
  document.getElementById("viewDetailsBtn").onclick = openTicketScreen;
  document.getElementById("bookAgainBtn").onclick = openTicketScreen;
};


const homeViewDetails = document.getElementById("homeViewDetails");

if (homeViewDetails) {
  homeViewDetails.onclick = openTicketScreen;
}



function openTicketScreen() {
  let startTime = 300;

  appContent.innerHTML = `
  <div style="background:#0a57ff;color:white;padding:15px;display:flex;align-items:center;gap:10px">
    <span id="ticketBack" style="cursor:pointer">←</span>
    <div>
      <h3>Booking Details</h3>
      <small>Mobile: 8799673188</small>
    </div>
  </div>

  <div style="padding:15px">
    <div style="background:#000;color:white;border-radius:12px;padding:15px;text-align:center">
      <p style="color:white ; font-weight:bold">Dynamic preview will close in</p>
      <h1 id="timer" style="color:red;font-size:40px ; margin-top:0.5rem">05:00</h1>
      <p style="color:grey ; font-size:12px">Ticket Booking Date & Time</p>
      <p id="liveDate" style="font-size:18px ; color:#f59e0b ; font-weight:bold ; margin-top:0.3rem"></p>
      <p style="margin-top:0.2rem ; font-size:12px">R17891</p>
    </div>





<div style="background:#fff;border-radius:12px;padding:15px;margin-top:15px;font-size:0.8rem ;font-weight:600; box-shadow:0 0 10px rgba(0,0,0,0.1)">

  <div style="display:flex;justify-content:space-between;font-weight:600">
    <span>Season Ticket</span>
    <span>X52CE9100E</span>
  </div>

  <div style="display:flex;justify-content:space-between;margin:1rem 0">
    <span>VIRAMGAM JN.</span>
    <span style="color:grey">— 66 km —</span>
    <span>AHMEDABAD JN.</span>
  </div>

  <div style="display:flex;justify-content:space-between;color:grey;font-size:13px;margin-bottom:10px">
    <div>
      <p style="margin:0">Via</p>
      <p style="margin:0;color:#000;margin-top:0.2rem">CLDY</p>
    </div>
    <div style="text-align:right">
      <p style="margin:0">Booked on</p>
      <p style="margin:0;color:#000;margin-top:0.2rem">12/01/2026 10:43</p>
    </div>
  </div>

  <div style="display:flex;justify-content:space-between;color:grey;font-size:13px;margin-bottom:10px">
    <div>
      <p style="margin:0;margin-top:0.3rem">Valid From</p>
      <p style="margin:0;color:#000;margin-top:0.2rem">12/01/2026</p>
    </div>
    <div style="text-align:right">
      <p style="margin:0;margin-top:0.3rem">Valid Till</p>
      <p style="margin:0;color:#000;margin-top:0.2rem">11/02/2026</p>
    </div>
  </div>

  <p style="font-size:0.7rem ; margin:1rem 0 ; font-weight:500 ; color:#444">
    MONTHLY | SUPERFAST | SECOND | ₹ 495.00
  </p>

  <hr style="border:none;border-top:1px solid #ddd;margin:10px 0">

  <div style="display:flex;justify-content:space-between;font-size:13px">
    <div>
      <p style="margin:0;color:grey;margin-top:0.8rem">Name</p>
      <p style="margin:0;margin-top:0.2rem">Krish Gupta</p>
    </div>
    <div style="text-align:right">
      <p style="margin:0;color:grey;margin-top:0.8rem">Age</p>
      <p style="margin:0;margin-top:0.2rem">19 years</p>
    </div>
  </div>

  <div style="display:flex;justify-content:space-between;font-size:13px;margin-top:8px">
    <div>
      <p style="margin:0;color:grey;margin-top:0.3rem">ID Type</p>
      <p style="margin:0;margin-top:0.2rem">PAN Card</p>
    </div>
    <div style="text-align:right">
      <p style="margin:0;color:grey;margin-top:0.3rem">ID Number</p>
      <p style="margin:0;margin-top:0.2rem">ESTPG0749B</p>
    </div>
  </div>

</div>

  `;

  document.getElementById("liveDate").innerText = new Date().toLocaleString();

  const timerEl = document.getElementById("timer");
  const interval = setInterval(() => {
    let m = Math.floor(startTime / 60);
    let s = startTime % 60;
    timerEl.innerText = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    startTime--;
    if (startTime < 0) clearInterval(interval);
  }, 1000);

  document.getElementById("ticketBack").onclick = () => myBookingsBtn.click();
}
